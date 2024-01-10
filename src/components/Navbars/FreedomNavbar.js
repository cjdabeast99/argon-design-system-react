import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import 'assets/css/navbarToggle.css';

class FreedomNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {

    const { isDarkened } = this.props;
    const navbarClass = isDarkened ? 'darkened-navbar' : '';

    return (
      <>
        <header  className="header-global">
          <Navbar
            className={`navbar-main navbar-transparent navbar-light headroom ${navbarClass}`}
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/freedom/logo_long.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/freedom/logo_long_mobile.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <NavItem to="/" tag={Link}>
                    <NavLink
                      className="nav-link-icon"
                    >
                    <span className="nav-link-inner--text ml-2">
                      Home
                    </span>
                    </NavLink>
                  </NavItem>
                  <NavItem to="/about" tag={Link}>
                    <NavLink
                      className="nav-link-icon"
                    >
                    <span className="nav-link-inner--text ml-2">
                      About
                    </span>
                    </NavLink>
                  </NavItem>
                  <NavItem to="/" tag={Link}>
                    <NavLink
                      className="nav-link-icon"
                    >
                    <span className="nav-link-inner--text ml-2">
                      Quality
                    </span>
                    </NavLink>
                  </NavItem>
                  <NavItem to="/" tag={Link}>
                    <NavLink
                      className="nav-link-icon"
                    >
                    <span className="nav-link-inner--text ml-2">
                      Market
                    </span>
                    </NavLink>
                  </NavItem>
                  <NavItem to="/" tag={Link}>
                    <NavLink
                      className="nav-link-icon"
                    >
                    <span className="nav-link-inner--text ml-2">
                      Portal
                    </span>
                    </NavLink>
                  </NavItem>
                  {/*
                  <NavItem>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Examples</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  </NavItem>
                  */}
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/freedomusafl/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Follow us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://twitter.com/freedomics"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Follow us on Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/company/freedomusa"
                      id="tooltip184698706"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698706">
                      Follow us on LinkedIn
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default FreedomNavbar;
