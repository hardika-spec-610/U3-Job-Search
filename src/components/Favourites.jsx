import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const Favourites = () => {
  let favouriteCompany = useSelector(
    (state) => state.favouriteCompany.companyName
  );
  const dispatch = useDispatch();
  return (
    <Container className="pt-5">
      <h1>Here is your Favourites list</h1>
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
                    fill="Red"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: index,
                      });
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
