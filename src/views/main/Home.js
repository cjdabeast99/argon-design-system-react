import React from "react";

// reactstrap components
import {  
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import FreedomNavbar from "components/Navbars/FreedomNavbar.js";
import FreedomFooter from "components/Footers/FreedomFooter.js";

// index page sections
import ServiceIndustries from "../IndexSections/ServiceIndustries.js";
import Tabs from "../IndexSections/FreedomMainTabs.js";

// Custom components
import ScrollFade from "components/Custom/ScrollFade";
import Modals from "../IndexSections/GeneralModals.js";

import '../../assets/css/tabs.css';

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  };

  constructor(props) {
    super(props);
    this.modalsRef = React.createRef();
  }

  render() {
    return (
      <>
        <Modals ref={this.modalsRef} />
        <FreedomNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Your time is worth smart and simple solutions
                      </h1>
                      <p className="lead text-white">
                        Make confident decisions working with freedom by receiving personalized and intelligent long-term care.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="mailto:sales@freedomusa.com"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-rocket" />
                          </span>
                          <span className="btn-inner--text">Get Started</span>
                        </Button>
                      </div>
                    </Col>
                    <Col lg="6">
                        <CardImg
                        alt="..."
                        src={require("assets/img/components/header.png")}
                        top
                        />
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Stabiliy & Growth
                          </h6>
                          <p className="description mt-3">
                            Freedom continues to reach new heights as we recently gained more capacity at headquarters by growing into our second building, and we have new global facilities opening.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Distributor
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Growth
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              New heights
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={() => this.modalsRef.current.toggleModal("defaultModal", {
                              title: "Stability & Growth",
                              desc: `
                              o	In business since 1999 with a <b class="shimmer">compelling growth</b> model and business sense focused on quality.
                              <br/><br/>
                              o	Fireworks kick off our <b class="shimmer">25th Anniversary</b> with the beginnings of another major era of growth, communication, and branding to clearly separate ourselves from everyone else.
                              <br/><br/>
                              o	Continuously positioning ourselves <b class="shimmer">at the forefront</b> of the finest Customer Service, access to high quality parts, and internal infrastructure to support long-term expansion.
                              <br/><br/>
                              o	<b class="shimmer">Creating a new definition for “distributor”</b>.
                              <br/><br/>
                              o	Responsible to our Customers and the industries by utilizing best practices and <b class="shimmer">remaining current with industry changes</b>.
                              <br/><br/>
                              o	Freedom continues to reach <b class="shimmer">new heights</b> as we recently gained more capacity at headquarters by growing into our second building, and we have new global facilities opening.
                              <br/><br/>
                              o	Cultivate company culture on <a href="#">Social Responsibility and Environmental Sustainability</a> throughout our practices.
                              <br/><br/>
                              o	<b class="shimmer">Freedom focuses</b> on longterm relationships with quality, listening and integration.
                              `,
                            })}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Unmatched Access
                          </h6>
                          <p className="description mt-3">
                            Get sophisticated investment opportunities traditionally relegated to industry insiders and the ultra-wealthy.
                          </p>
                          <br/><br/>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            onClick={() => this.modalsRef.current.toggleModal("defaultModal", {
                              title: "Unmatched Access",
                              desc: `
                              o	Fully <b class="shimmer">expect</b> to receive the best experience. Listening, connecting and proving is our model.
                              <br/><br/>
                              o	Huge part information database to help make <b class="shimmer">quick</b> decisions.
                              <br/><br/>
                              o	<b class="shimmer">24/7</b> inquiries and purchases through our website.
                              <br/><br/>
                              o	Building <b class="shimmer">tools</b> for more seamless communication.
                              <br/><br/>
                              o	Customer Service <b class="shimmer">experience</b> is monitored so that you feel rewarded.
                              <br/><br/>
                              o	Visit our locations any time.
                              `,
                            })}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Smart & Simple
                          </h6>
                          <p className="description mt-3">
                            In just a few taps, set your financial goals in motion and let our easy-to-use products handle the rest
                          </p>
                          <br/><br/>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              simplicity
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              success
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            onClick={() => this.modalsRef.current.toggleModal("defaultModal", {
                              title: "Stability & Growth",
                              desc: `
                              o	We are here for serious long-term <b class="shimmer">relationships</b> and meeting the requirements of each contract.
                              <br/><br/>
                              o	We like an old-fashioned phone call, and we have the infrastructure and teams to <b class="shimmer">link</b> to your management and communication software. 
                              <br/><br/>
                              o	Risk managed with every order.
                              <br/><br/>
                              o	Operating at the highest level of <b class="shimmer">integrity</b> for over two decades.                              
                              `,
                            })}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <ScrollFade>
            <section className="section section-lg">
                <Container>
                <Row className="row-grid align-items-center">
                    <Col className="order-md-1" md="6">
                    <div className="pr-md-5">
                        <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                        <i className="ni ni-settings-gear-65" />
                        </div>
                        <h3>Introduction Statement</h3>
                        <p>
                        Trusted by ...our business model is simple: put the customer and quality first...
                        </p>
                        <ul className="list-unstyled mt-5">
                        <li className="py-2">
                            <div className="d-flex align-items-center">
                            <div>
                                <Badge
                                className="badge-circle mr-3"
                                color="success"
                                >
                                <i className="ni ni-settings-gear-65" />
                                </Badge>
                            </div>
                            <div>
                                <h6 className="mb-0">
                                Full proof process
                                </h6>
                            </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="d-flex align-items-center">
                            <div>
                                <Badge
                                className="badge-circle mr-3"
                                color="success"
                                >
                                <i className="ni ni-html5" />
                                </Badge>
                            </div>
                            <div>
                                <h6 className="mb-0">Fair prices</h6>
                            </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="d-flex align-items-center">
                            <div>
                                <Badge
                                className="badge-circle mr-3"
                                color="success"
                                >
                                <i className="ni ni-satisfied" />
                                </Badge>
                            </div>
                            <div>
                                <h6 className="mb-0">
                                Top customer service
                                </h6>
                            </div>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </Col>
                    <Col className="order-md-2" md="6">
                        <div className="container">
                            <video style={{ width: '100%' }} loop autoPlay muted playsInline>
                                <source src={require("assets/video/ecomp-def.mp4")} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
          </ScrollFade>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="12">
                  <ScrollFade direction='right-left'>
                    <Card className="shadow">
                      <Tabs/>
                    </Card>
                    </ScrollFade>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <ScrollFade>
                    <ServiceIndustries />
                  </ScrollFade>
                </Col>
              </Row>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <ScrollFade direction='left-right'>
              <Container>
                <Row className="row-grid align-items-center">
                  <Col className="order-lg-2 ml-lg-auto" md="6">
                    <div className="position-relative pl-md-5">
                      <img
                        alt="..."
                        className="img-center img-fluid"
                        src={require("assets/img/ill/buildings.png")}
                      />
                    </div>
                  </Col>
                  <Col className="order-lg-1" lg="6">
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                          <i className="ni ni-building text-primary" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h4 className="display-3 text-white">Managed&nbsp;Care</h4>
                        <p className="text-white">
                          {/* NULL */}
                        </p>
                      </div>
                    </div>
                    <Card className="shadow shadow-lg--hover mt-5">
                      <CardBody>
                        <div className="d-flex px-3">
                          <div>
                            <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                              <i className="ni ni-satisfied" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-success">
                              Service Excellence
                            </h5>
                            <p>
                              Finding what works best for you and support it with dedicated resources.
                            </p>
                            <a
                              className="text-success"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                    <Card className="shadow shadow-lg--hover mt-5">
                      <CardBody>
                        <div className="d-flex px-3">
                          <div>
                            <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                              <i className="ni ni-bulb-61" />
                            </div>
                          </div>
                          <div className="pl-4">
                            <h5 className="title text-warning">
                              Customer&nbsp;Portal
                            </h5>
                            <p>
                              Easily track your orders and see the progress on them real time!
                            </p>
                            <a
                              className="text-warning"
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Learn more
                            </a>
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </ScrollFade>
          </section>
          <ScrollFade>
            <section className="section section-lg">
              <Container>
                <Row className="justify-content-center text-center mb-lg">
                  <Col lg="8">
                    <h2 className="display-3">Quarterly News & Facts</h2>
                    <p className="lead text-muted">
                      Content...
                    </p>
                  </Col>
                </Row>
              </Container>
            </section>
          </ScrollFade>
          <ScrollFade direction='right-left'>
            <section className="section section-lg pt-0">
              <Container>
                <Card className="bg-gradient-warning shadow-lg border-0">
                  <div className="p-5">
                    <Row className="align-items-center">
                      <Col lg="8">
                        <h3 className="text-white">
                          Show Your Time and Confidence Its Worth
                        </h3>
                        <p className="lead text-white mt-3">
                          See why over ### have chosen Freedom as a trusted supplier for 25 years
                        </p>
                      </Col>
                      <Col className="ml-lg-auto" lg="3">
                        <Button
                          block
                          className="btn-white"
                          color="default"
                          href="mailto:sales@freedomusa.com"
                          size="lg"
                        >
                          Get Started
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Container>
            </section>
          </ScrollFade>
        </main>
        <FreedomFooter />
      </>
    );
  }
}

export default Landing;
