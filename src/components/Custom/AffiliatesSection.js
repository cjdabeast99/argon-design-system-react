import React, { useState } from 'react';
import { Row, Col, CardTitle } from 'reactstrap';
import logoDark from "assets/img/freedom/logo.png";

const AffiliatesSection = () => {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);

  return (
    <Row>
      <Col xl="12">
        <CardTitle className="my-3 text-center font-size-24">Affiliates</CardTitle>

        <Col lg="12">
          <div className="hori-timeline">
            <div
              className="owl-carousel owl-theme navs-carousel events"
              id="timeline-carousel"
            >
              {step1 ? (
                <>
                  <Row>
                    <Col md={3}>
                      <div className="item">
                        <div className="client-images">
                          <img
                            src={logoDark}
                            alt="client-img"
                            className="mx-auto img-fluid d-block bx-burst-hover"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="item">
                        <div className="client-images">
                          <img
                            src={logoDark}
                            alt="client-img"
                            className="mx-auto img-fluid d-block bx-burst-hover"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="item">
                        <div className="client-images">
                          <img
                            src={logoDark}
                            alt="client-img"
                            className="mx-auto img-fluid d-block bx-burst-hover"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="item">
                        <div className="client-images">
                          <img
                            src={logoDark}
                            alt="client-img"
                            className="mx-auto img-fluid d-block bx-burst-hover"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              ) : null}

              {step2 ? (
                <>
                  <Row>
                    <Col md={3}>
                      <div className="item">
                        <div className="client-images">
                          <img
                            src={logoDark}
                            alt="client-img"
                            className="mx-auto img-fluid d-block bx-burst-hover"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="item">
                        <div className="client-images">
                          <img
                            src={logoDark}
                            alt="client-img"
                            className="mx-auto img-fluid d-block bx-burst-hover"
                          />
                        </div>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="item">
                        <div className="client-images">
                          <img
                            src={logoDark}
                            alt="client-img"
                            className="mx-auto img-fluid d-block bx-burst-hover"
                          />
                        </div>
                      </div>
                    </Col>
                  </Row>
                </>
              ) : null}

              <div className="owl-nav mb-5" style={{ textAlign: "center" }}>
                <button
                  type="button"
                  onClick={() => {
                    setStep1(true);
                    setStep2(false);
                  }}
                  className="border-0"
                  disabled={step1}
                >
                  <i className="mdi mdi-chevron-left" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStep1(false);
                    setStep2(true);
                  }}
                  className="border-0"
                  disabled={step2}
                >
                  <i className="mdi mdi-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Col>
    </Row>
  );
};

export default AffiliatesSection;
