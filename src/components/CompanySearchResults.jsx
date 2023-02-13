import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavouriteAction } from "../redux/actions";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch();
  const companyName = useSelector(
    (state) => state.favouriteCompany.companyName
  );
  // console.log(companyName);
  // console.log("comapnyName1", companyName);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      let response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        console.log("companydata", data);
        // console.log("comapnyName2", data[0].company_name);

        setJobs(data);
        // console.log("comapnyName", jobs);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {/* {jobs === [] ? (
        <> */}
      <Button
        variant="dark"
        // disabled={companyName.some(
        //   (company) => company.company_name === jobs[0].company_name
        // )}
        onClick={() => {
          dispatch(addToFavouriteAction(jobs[0]));
        }}
      >
        Add company to Favorite
      </Button>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>{" "}
      {/* </>
      ) : (
        <h2>There is no open position in this Company</h2>
      )} */}
    </Container>
  );
};

export default CompanySearchResults;
