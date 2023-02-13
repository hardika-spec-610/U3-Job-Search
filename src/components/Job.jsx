import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { addToFavouriteAction } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.favouriteCompany.companyName);
  let location = useLocation();
  // console.log(location);

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        {location.pathname === ("/" || "/favourites") && (
          <Button
            variant="dark"
            disabled={jobs.some((company) => company._id === data._id)}
            onClick={() => {
              dispatch(addToFavouriteAction(data));
            }}
          >
            Add to Favorite
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default Job;
