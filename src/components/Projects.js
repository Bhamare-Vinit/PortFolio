import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/salestwo.jpg";
import projImg2 from "../assets/img/Movie2.jpg";
import projImg3 from "../assets/img/Nobel2.jpg";
import projImg4 from "../assets/img/clinic2.jpg";
import projImg5 from "../assets/img/Bi2.jpg";
import projImg6 from "../assets/img/Cog2.jpg";
import projImg7 from "../assets/img/Job2.jpg";
import projImg8 from "../assets/img/Block3.jpg";
import projImg9 from "../assets/img/Chat2.jpg";
import projImg10 from "../assets/img/Turf2.jpg";
import projImg11 from "../assets/img/Cab2.jpg";
import projImg12 from "../assets/img/Covi2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Sales Analysis",
      description:
        "Analyze the sales data of the company to enhance customer experience and boost sales",
      imgUrl: projImg1,
      glink: "https://github.com/Bhamare-Vinit/Sales_Analysis",
    },
    {
      title: "Movie Budget-Revenue Analysis",
      description:
        "projecct analyzes movie data to better understand what types of movie have been the most successful in last decade",
      imgUrl: projImg2,
      glink: "https://github.com/Bhamare-Vinit/Movie-Budget-Revenue-Analysis",
    },
    {
      title: "Nobel Prize Analysis",
      description:
        "Analyze Nobel Prize data, focusing on gender, nationality, age, and repeat winners. Discover trends, including the influence of the United States and women's representation in different prize categories.",
      imgUrl: projImg3,
      glink: "https://github.com/Bhamare-Vinit/Nobel-Prize-Analysis",
    },
    {
      title: "Effect of Handwashing Data analysis",
      description:
        "Analyzing the Impact of Mandatory Handwashing on Births and Deaths",
      imgUrl: projImg4,
      glink:
        "https://github.com/Bhamare-Vinit/Effect-of-Handwashing-Data-analysis",
    },
    {
      title: "PowerBi Sales Analysis Dashboard",
      description:
        "PowerBi dashboard to analyze the trends and patterns in market",
      imgUrl: projImg5,
      glink: "",
    },
    {
      title: "Cognifyz internship Project",
      description:
        "Analyzed the data and find The Trends and Patterns to make data driven decision",
      imgUrl: projImg6,
      glink: "",
    },
  ];

  const projects1 = [
    {
      title: "YoJob",
      description: "React web application to find jobs based on your skills",
      imgUrl: projImg7,
      glink: "https://github.com/Bhamare-Vinit/YoJob",
    },
    {
      title: "Fund Raise",
      description: "web3 web application for crowdfunding",
      imgUrl: projImg8,
      glink: "https://github.com/Bhamare-Vinit/Fund_Raise",
    },
    {
      title: "Chat with PDF",
      description: "Web application used to interact with PDF or documets",
      imgUrl: projImg9,
      glink: "",
    },
  ];
  const projects2 = [
    {
      title: "Turf Booking Application",
      description: "Python based desktop application to book turfs and halls",
      imgUrl: projImg10,
      glink: "https://github.com/Bhamare-Vinit/Hall-Turf-Booking-Application",
    },
    {
      title: "Cab Booking Application",
      description: "Java Based desktop application to book a cab",
      imgUrl: projImg11,
      glink: "",
    },
    {
      title: "Covimate",
      description:
        "Python based desktop application to analyze the Symptoms of Covid-19",
      imgUrl: projImg12,
      glink: "https://github.com/Bhamare-Vinit/Covimate",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Data Analysis</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Software Development
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  );
};
