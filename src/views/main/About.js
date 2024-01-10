import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
  } from "reactstrap";
import FreedomNavbar from 'components/Navbars/FreedomNavbar.js';
import FreedomFooter from 'components/Footers/FreedomFooter.js';
import ScrollFade from 'components/Custom/ScrollFade';
import { withTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import avatar_carl from 'assets/img/users/carl.jpg';
import avatar_james_brown from 'assets/img/users/james_brown.jpg';
import "assets/css/about.css"
  

class About extends React.Component {
    state = {
      expanded: false,
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
        Executive: [
          [
            { id: 1, name: 'Carl DePaolo', title: 'CEO/President', avatar: avatar_carl },
            { id: 1, name: 'James Brown', title: 'COO', avatar: avatar_james_brown },
            { id: 1, name: 'Jodi Brown', title: 'Executive Partner' },
            { id: 1, name: 'Crystal Depaolo', title: 'CMO' },
          ],
        ],
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
      };
  
      const hiddenData = {
        Allstaff: [
            [
              { id: 3, name: 'John McKay', title: 'President of Sales' },
              { id: 3, name: 'John Magee', title: 'VP of Sales' },
              { id: 3, name: 'John Hartnett', title: 'Director of Quality' },
              { id: 3, name: 'John McKay', title: 'President of Sales' },
              { id: 3, name: 'John Magee', title: 'VP of Sales' },
              { id: 3, name: 'John Hartnett', title: 'Director of Quality' },
              { id: 3, name: 'John McKay', title: 'President of Sales' },
              { id: 3, name: 'John Magee', title: 'VP of Sales' },
              { id: 3, name: 'John Hartnett', title: 'Director of Quality' },
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
        <Card className="person-card">
          <div className="img-area">
            <img src={person.avatar} />
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
          <main ref="main" style={{ marginTop: '10rem' }}>
            <div className="position-relative">
                <div className="page-content">
                <Container fluid>
                    <OrganizationalChart data={orgData} />
                    {expanded && (
                    <div className="all-staff">
                        <OrganizationalChart data={hiddenData} />
                    </div>
                    )}
                    <ExpandButton expanded={expanded} toggle={this.toggleExpanded} />
                </Container>
                </div>
            </div>
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
