import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <Container className="box">
      <Row>
        <Col md={6}>
          <img
            src={cover}
            alt="#"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          />
        </Col>
        <Col md={6}>
          <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            {title}
          </h1>
          <p
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1200"
          >
            {desc}
          </p>
          <button
            className="btn-primary"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            Visit Collections
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default SlideCard;
