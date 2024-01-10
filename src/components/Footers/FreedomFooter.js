/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class FreedomFooter extends React.Component {
  render() {
    return (
      <>
        <footer className=" footer">
          <Container>
            <Row className=" row-grid align-items-center mb-3">
              <Col lg="6">
                <h3 className=" text-primary font-weight-light mb-2">
                  Get in touch!
                </h3>
                <h4 className=" mb-0 font-weight-light">
                  You can contact us by phone, video, email, website, site visit.
                </h4>
              </Col>
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="https://www.facebook.com/freedomusafl/"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Follow us on Facebook
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="#"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Follow us on Instagram
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/freedomics"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Follow us on Twitter
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="twitter"
                  href="https://www.linkedin.com/company/freedomusa/"
                  id="tooltip829810203"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810203">
                  Follow us on LinkedIn
                </UncontrolledTooltip>
              </Col>
            </Row>
            <Row className=" align-items-center justify-content-md-between">
            <Col md="12">
                <Nav className=" nav-footer justify-content-center">
                  <NavItem>
                    <NavLink
                      href="https://www.google.com/maps/dir//freedom+sales/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88c296a17511aa1b:0x80ac4c520ab896e?sa=X&ved=2ahUKEwiswKGq5tGDAxW7SDABHamwA5gQ9Rd6BAgkEAA"
                      target="_blank"
                    >
                      11225 Challenger Ave, Odessa, FL 33556
                    </NavLink>
                  </NavItem>
                  |
                  <NavItem>
                    <NavLink
                      href="tel:727-835-1150"
                    >
                      (727) 835-1150
                    </NavLink>
                  </NavItem>
                  |
                  <NavItem>
                    <NavLink
                      href="email:sales@freedomusa.com"
                    >
                      sales@freedomusa.com
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
            <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
            <Row className=" align-items-center justify-content-md-between">
              <Col md="6">
                <div className=" copyright">
                  © {new Date().getFullYear()}{" "}
                    Freedom USA.
                </div>
              </Col>
              <Col md="6">
                <Nav className=" nav-footer justify-content-end">
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Newsletter
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Careers
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Blog
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#"
                      target="_blank"
                    >
                      Subscribe
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default FreedomFooter;
