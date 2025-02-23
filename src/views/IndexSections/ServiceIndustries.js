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
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap";

class Download extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg">
          <Container>
            <Row className="row-grid justify-content-center">
              <Col className="text-center" lg="8">
                <h2 className="display-2" style={{ color: 'white' }}>
                 Industries We Service{" "}
                </h2>
                <br/><br/>
                <div className="text-center">
                  <Row className="justify-content-center">
                    <Col lg="2" xs="4">
                      <a
                        href="#"
                        id="tooltip255035741"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-industry-icon-png-image_1641009.jpg"
                          style={{ borderRadius: '25%' }}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip255035741">
                        Commercial & Consumer Electronics
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#"
                        id="tooltip265846671"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-industry-icon-png-image_1641009.jpg"
                          style={{ borderRadius: '25%' }}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip265846671">
                        Industrial & Hi-Rel
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#"
                        id="tooltip233150499"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-industry-icon-png-image_1641009.jpg"
                          style={{ borderRadius: '25%' }}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip233150499">
                        Medical Devices Aerospace, Military & Civil Aviation
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#"
                        id="tooltip308866163"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-industry-icon-png-image_1641009.jpg"
                          style={{ borderRadius: '25%' }}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip308866163">
                        Smart Applications & Robotics
                      </UncontrolledTooltip>
                    </Col>
                    <Col lg="2" xs="4">
                      <a
                        href="#"
                        id="tooltip76119384"
                        target="_blank"
                      >
                        <img
                          alt="..."
                          className="img-fluid"
                          src="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-industry-icon-png-image_1641009.jpg"
                          style={{ borderRadius: '25%' }}
                        />
                      </a>
                      <UncontrolledTooltip delay={0} target="tooltip76119384">
                        Telecommunications & Networking
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}

export default Download;
