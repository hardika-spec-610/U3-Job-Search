import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getJobsActionAsync, GET_JOBS } from "../redux/actions";
import Job from "./Job";
import MyNav from "./MyNav";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.company);
  const applicationSpinner = useSelector((state) => state.jobs.isLoading);
  const applicationError = useSelector((state) => state.jobs.isError);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch({ type: GET_JOBS, payload: [] });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsActionAsync(baseEndpoint, query));

    // try {
    //   let response = await fetch(baseEndpoint + query + "&limit=20");
    //   if (response.ok) {
    //     const { data } = await response.json();
    //     console.log("data", data);
    //     setJobs(data);
    //   } else {
    //     alert("Error fetching results");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Container>
      <MyNav buttonText="Start Searching" />
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <div className="d-flex justify-content-between align-items-center">
            <h1>Remote Jobs Search</h1>
            <Link to="/favourites">
              <Button variant="info">Favorites</Button>
            </Link>
          </div>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {applicationError && (
            <Alert variant="danger" className="mr-2">
              Something very bad happened with the data 😨
            </Alert>
          )}
          {applicationSpinner && (
            <Spinner animation="border" variant="success" />
          )}

          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
