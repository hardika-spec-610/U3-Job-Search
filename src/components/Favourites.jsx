import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { removeFromFavouriteAction } from "../redux/actions";

const Favourites = () => {
  let favouriteCompany = useSelector(
    (state) => state.favouriteCompany.companyName
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container className="pt-5">
      <div className="d-flex align-items-center">
        <h1 className="d-inline-block align-middle">
          Here is your Favourites list
        </h1>

        <Button
          variant="dark"
          className="ml-auto"
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </div>

      <Row>
        <Col xs={12}>
          <ListGroup className="mt-4">
            {favouriteCompany.map((company, index) => (
              <ListGroupItem
                key={index}
                className="my-2"
                style={{
                  borderBlockStartWidth: 1,
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <BsStarFill fill="Yellow" className="mr-2" />
                    <Link to={`/${company.company_name}`}>
                      {company.company_name}
                    </Link>
                  </div>
                  <a href={company.url} target="_blank" rel="noreferrer">
                    {company.title}
                  </a>
                  <MdDelete
                    size={26}
                    fill="Red"
                    onClick={() => {
                      dispatch(removeFromFavouriteAction(index));
                    }}
                  />
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
