import { Col } from "react-bootstrap";
import {Nav } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl ,glink}) => {
  return (
    <Col size={20} sm={6} md={4}>
      <Nav.Link href={glink}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="img"/>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Nav.Link>
    </Col>
  );
}
