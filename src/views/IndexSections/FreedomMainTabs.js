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
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

class TabsSection extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1,
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index,
    });
  };
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col className="mt-5 mt-lg-0" lg="11">
            {/* Menu */}
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    GLOBAL SOURCING
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    INVENTORY
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    REDUCING RISK
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 4}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 4,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 4)}
                    href="#pablo"
                    role="tab"
                  >
                    ADAPTABILITY & FLEXIBILITY
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 5}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 5,
                    })}
                    onClick={(e) => this.toggleNavs(e, "plainTabs", 5)}
                    href="#pablo"
                    role="tab"
                  >
                    PRINCIPLES
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                    <p className="description"> {/* GLOBAL SOURCING */}
                      <b className="shimmer">Peace of mind</b> is accomplished when neither quality nor price needs sacrificing.
                      <br/><br/>
                      Freedom offers our Customers <b className="shimmer">visibility and access</b> to both strategic market insight as well as the highest quality supply chain solutions available for shortened lead times, cost savings, and flexible scheduling.
                      <br/><br/>
                      <b className="shimmer">Purchase</b> from the Americas, Europe, and Asia (link to a video about mastering global supply chain) with confidence for factory traceability or for <b className="shimmer">authenticated</b> obsolete parts.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                    <p className="description"> {/* INVENTORY */}
                      <a href="#">Our stocked inventory, variety, and controls matter</a>.
                      <br/><br/>
                      We stock over 500 million electronic components from over 2,500 manufacturers in our <b className="shimmer">new, 24/7 monitored warehouse</b> and carry over 100 million components on consignment from our customers that are available for purchase.
                      <br/><br/>
                      Stock information is updated to our online partners <b className="shimmer">daily</b>.
                      <br/><br/>
                      Shortage and end-of-life <b className="shimmer">alleviation</b>.
                      <br/><br/>
                      Inventory records are digitally controlled with TALON <b className="shimmer">per regulated industry requirements</b> and <a href="#">TALON can integrate with your software systems</a>.
                      <br/><br/>
                      Parts are processed through our <a href="#">AS6081 inspection controls and stored per our ANSI/ESD S20.20 controls</a>.
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                    <p className="description"> {/* REDUCING RISK */}
                      Freedom is <a href="#">AS9120, ISO 13485, ISO9001, AS 6081, ANSI/ESD S20.20-2021 <b className="shimmer">certified</b>, AC-00-56B accredited & ERAI and GIDEP Members</a>.
                      <br/><br/>
                      Relentless pursuit of <b className="shimmer">Customer Satisfaction and on-time deliver</b>.
                      <br/><br/>
                      Fully supported and funded <b className="shimmer">counterfeit mitigation program</b> including industry certified inspectors, calibrated digital microscopes and full AS 6081 testing protocols based on source of components.
                      <br/><br/>
                      Traceability documentation, inspection pictures and information stored per AS 9120 and ISO 13485 <b className="shimmer">standards requirements</b>.
                      <br/><br/>
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs4">
                    <p className="description"> {/* ADAPTABILITY & FLEXIBILITY */}
                      <b className="shimmer">Solutions</b> based thinking to support your individual requirements, preferences, and wishes
                      <br/><br/>
                      Established <b className="shimmer">infrastructure</b> systems and warehousing
                      <br/><br/>
                      <b className="shimmer">Easy integration</b> into your processes
                      <br/><br/>
                      Resources <b className="shimmer">ready to deploy</b> to your needs
                    </p>
                  </TabPane>
                  <TabPane tabId="plainTabs5">
                    <p className="description"> {/* PRINCIPLES */}
                      Quality first – <b className="shimmer">Protect Your Brand</b>
                      <br/><br/>
                      Communication & Transparency
                      <br/><br/>
                      Accountability – <b className="shimmer">Customer attention</b> and integrating to your needs
                      <br/><br/>
                      Regulatory requirements
                      <br/><br/>
                      <a href="#">Social Responsibility & Environmental Sustainability focus</a>.
                    </p>
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
            <br/>
          </Col>
        </Row>
      </>
    );
  }
}

export default TabsSection;
