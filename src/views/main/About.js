import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Row,
    Col,
    CardImg,
  } from "reactstrap";
import FreedomNavbar from 'components/Navbars/FreedomNavbar.js';
import FreedomFooter from 'components/Footers/FreedomFooter.js';
import ScrollFade from 'components/Custom/ScrollFade';
import { withTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import avatar_carl from 'assets/img/users/carl.jpg';
import avatar_james_brown from 'assets/img/users/james_brown.jpg';
import avatar_crystal_depaolo from 'assets/img/users/crystal_depaolo.png';
import avatar_ernie_brusalis from 'assets/img/users/ernie_brusalis.jpg';
import avatar_jodi_brown from 'assets/img/users/jodi_brown.jpg';
import avatar_john_mckay from 'assets/img/users/john_mckay.jpg';
import avatar_john_magee from 'assets/img/users/john_magee.jpg';
import avatar_john_hartnett from 'assets/img/users/john_hartnett.jpg';
import "assets/css/about.css"
import Modals from "../IndexSections/AboutModals.js";
  

class About extends React.Component {
    state = {
      expanded: false,
    };

    handleClick = () => {
      this.Modals.toggleModal("defaultModal");
    };
  
    openModal = (person) => {
      this.Modals.toggleModal("defaultModal", person);
    };
  
    componentDidMount() {
      document.title = 'About';
      // Additional side effects or initialization logic can go here
    }
  
    toggleExpanded = () => {
      this.setState((prevState) => ({
        expanded: !prevState.expanded,
      }));
    };
  
    render() {
      const { expanded } = this.state;
  
      const orgData = {
        Leadership: [
          [
            { id: 1, name: 'Carl DePaolo', title: 'CEO/President', avatar: avatar_carl, desc: `Carl co-founded Freedom with his partners James Brown, Crystal DePaolo, and Jodi Brown in 1999 following a successful career in sales and management with two of the worlds largest independent distributors.  Carl's success stems from 31 years in electronic distribution sales and relationship development, a never ending desire to innovate and expand, and surrounding himself with great people.  "Our continuing success relies on our ability to meet and exceed what our customers expect in a fluid environment".  "Requiring us to deliver solutions to changes in market conditions, while maintaining only the highest quality standards, competitiveness, and reliability".  "Meet the people who make all this come to life".` },
            { id: 1, name: 'James Brown', title: 'COO', avatar: avatar_james_brown, desc: `The Co-founder of Freedom in 1999, James served the United States Coast Guard for seven years as well as working for the United Parcel Service which has paved the way for Freedom's Quality Directive and Logistical foundation.  James is driven to make Freedom an industry leader in Global Electronics Distribution.` },
            { id: 1, name: 'Crystal DePaolo', title: 'CMO', avatar: avatar_crystal_depaolo, desc: `One of the Founders of Freedom, Crystal started her career in Electronics Distribution in 1992 in Sales and Purchasing.  Crystal plays many roles at Freedom, most importantly as our marketing expert.  From Special Client Services and Customer, Public, & Employee relations, to promotional supplies and Branding, Crystal ensures everyone involved with Freedom's success is left with a genuine and lasting impression.  Crystal goes above and beyond to make certain our customers, employees, and business partners know they are part of the Freedom Family.` },
            { id: 1, name: 'Jodi Brown', title: 'Executive Partner', avatar: avatar_jodi_brown, desc: `Jodi has been part of Freedom since its inception and has been supporting Freedom in all areas of Finance.  Her background includes a BBA in Finance from Hofstra University and 8 years with the Internal Revenue Service specializing in financial analysis, payment negotiations and problem resolution.` },
            { id: 1, name: 'John McKay', title: 'President of Sales', avatar: avatar_john_mckay, desc: `With over 25 years of Electronic Distribution experience, John brings his extensive experience in sales, strategic purchasing, customer partnerships and delivering best-in-class solutions to Freedoms global customer base.  He came to the company with 23 years' experience, holding various positions in Distribution including; Director of Purchasing, Sales Management, and Sales.` },
            { id: 1, name: 'John Magee', title: 'Vice President of Sales', avatar: avatar_john_magee, desc: `John arrives at Freedom with 27 years of distribution experience in both the franchised and independent channels.  He brings skills in both customer and supplier management as well as a proven track record in developing sales professionals.  His focus will be on expanding Freedom’s market presence while managing sales team and revenue growth.` },
            { id: 1, name: 'John Hartnett', title: 'Director Of Quality', avatar: avatar_john_hartnett, desc: `John joins Freedom with 16 years of ISO Quality Management experience in Electronic Distribution and Medical Devices Manufacturing.  He has a strong drive for improvement and developing lasting business relationships.   He continues to align Freedom’s high-quality brand with the interest of our customers including assurance of regulatory compliance.   Past quality system successes include the Manufacturers Association of Florida Manufacturer of the Year Award and the SBA National Exporter of the Year Award.` },
            { id: 1, name: 'John Brusalis', title: 'CFO', avatar: avatar_ernie_brusalis, desc: `With 30 years of Finance and Accounting experience in Distribution and Manufacturing, Ernie brings extensive executive leadership background in electronics manufacturing, component supply chain sourcing initiatives, both domestic and international to Freedom USA. Company financial reporting, budget development and control, cost reduction of company operational activities, inventory management, continuous process improvement initiatives and banking relationships is his focus.` },
          ],
        ],
        /*
        Management: [
          [
            { id: 1, name: 'John McKay', title: 'President of Sales' },
            { id: 1, name: 'John Magee', title: 'VP of Sales' },
            { id: 1, name: 'John Hartnett', title: 'Director of Quality' },
          ],
          [
            { id: 2, name: 'Denise Marsh', title: 'CFO' },
            { id: 2, name: 'Denise Marsh', title: 'Human Resource' },
            { id: 2, name: 'Kat Mahoney', title: 'Marketing Specialist' },
          ],
          [
            { id: 3, name: 'Jason Appleby', title: 'Human Resource' },
            { id: 3, name: 'Denise Marsh', title: 'Human Resource' },
            { id: 3, name: 'Denise Marsh', title: 'Human Resource' },
            { id: 3, name: 'Denise Marsh', title: 'Human Resource' },
            { id: 3, name: 'Denise Marsh', title: 'Human Resource' },
          ],
        ],
        */
      };
  
      const hiddenData = {
        Allstaff: [
            [
              { id: 3, name: 'John McKay', title: 'President of Sales', desc: `` },
              { id: 3, name: 'John Magee', title: 'VP of Sales', desc: `` },
              { id: 3, name: 'John Hartnett', title: 'Director of Quality', desc: `` },
              { id: 3, name: 'John McKay', title: 'President of Sales', desc: `` },
              { id: 3, name: 'John Magee', title: 'VP of Sales', desc: `` },
              { id: 3, name: 'John Hartnett', title: 'Director of Quality', desc: `` },
              { id: 3, name: 'John McKay', title: 'President of Sales', desc: `` },
              { id: 3, name: 'John Magee', title: 'VP of Sales', desc: `` },
              { id: 3, name: 'John Hartnett', title: 'Director of Quality', desc: `` },
            ],
          ]
        };
  
        const OrganizationalChart = ({ data }) => {

            return (
              <div className="organizational-chart">
                {Object.entries(data).map(([levelName, rows]) => (
                  <div key={levelName} className={`level ${levelName.toLowerCase()}`}>
                    <h1 className="title">{levelName.toUpperCase()}</h1>
                    {rows.map((row, rowIndex) => <Row key={rowIndex} row={row} />)}
                  </div>
                ))}
              </div>
            );
          };
  
      const ExpandButton = ({ expanded, toggle }) => (
        <div className="see-all-staffing">
          <button className="expand-button" onClick={toggle}>
            {expanded ? 'Hide Staffing' : 'See All Staffing'}
          </button>
        </div>
      );

      const Row = ({ row }) => (
        <ScrollFade>
          <div className="row">
            {row.map((person,index) => <PersonCard key={index} person={person} />)}
          </div>
        </ScrollFade>
      );

      const PersonCard = ({ person }) => (
        <Card className="person-card" onClick={() => this.openModal(person)}>
          <div className="img-area">
            <img src={person.avatar} alt={`${person.name}'s Avatar`} />
            <div className="overlay">
              <h2>Learn More</h2>
            </div>
          </div>
          <div className="title-area">
            <CardTitle tag="h5">{person.name}</CardTitle>
            <CardSubtitle tag="h6">{person.title}</CardSubtitle>
          </div>
        </Card>
      );
  
      return (
        <>
          <FreedomNavbar isDarkened={true} />
          <main ref="main">
            <Modals ref={(modal) => (this.Modals = modal)} />
            <section style={{ position: "relative", textAlign: "center" }}>
              {/* Darkened overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              />
              {/* Image */}
              <CardImg
                alt="..."
                src={require("assets/img/freedom/FreedomBuilding.png")}
                top
                style={{ width: "100%" }}
              />

              {/* Freedom Logo */}
              <CardImg
                alt="..."
                src={require("assets/img/freedom/logo.png")}
                top
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  width: "50%",
                }}
              />
            </section>
            <ScrollFade>
              <section className="section section-lg pt-0" style={{marginTop: "5%"}} >
                <Container>
                  <Card className="bg-gradient-success shadow-lg border-0">
                    <div className="p-5 align-items-center">
                        <Col lg="13">
                          <h3 className="text-white">
                            Global Sourcing Excellence and Friendly Expertise at Freedom
                          </h3>
                          <hr style={{backgroundColor:"white"}} />
                        </Col>
                        <Col lg="13">
                          <p className="lead text-white mt-3">
                          Freedom’s team of insightful global sourcing experts combine experience and knowledge, with certified best industry practices for inspection, storage and record controls.
                          <br />
                          Spanning the Americas, Europe and Asia with a keen market scope, product life-cycle, and supply chain expertise, our staff is genuine, friendly, work very hard, and are considerate to your needs and demands.
                          <br/>
                          Want to talk to a supply chain solutions expert who you actually enjoy talking to?
                          </p>
                        </Col>
                        <Col className="ml-lg-auto" lg="3">
                          <Button
                            block
                            className="btn-white"
                            color="default"
                            href="tel:727-835-1150"
                            size="lg"
                          >
                            Call Freedom!
                          </Button>
                        </Col>
                    </div>
                  </Card>
                </Container>
              </section>
            </ScrollFade>
            <section>
              <div className="position-relative">
                  <div className="page-content">
                  <Container fluid>
                      <OrganizationalChart data={orgData} />
                      {expanded && (
                      <div className="all-staff">
                          <OrganizationalChart data={hiddenData} />
                      </div>
                      )}
                      {/*<ExpandButton expanded={expanded} toggle={this.toggleExpanded} />*/}
                  </Container>
                  </div>
              </div>
            </section>
          </main>
          <FreedomFooter />
        </>
      );
    }
  }
  
  About.propTypes = {
    t: PropTypes.any,
    chartsData: PropTypes.any,
    onGetChartsData: PropTypes.func,
  };
  
  export default withTranslation()(About);
