import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-scroll';

class Nav extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header" style={{ fontWeight: 'bold', fontSize: '45px'}} title= " " scroll>
            <Navigation className="navigation">
            <Link
              activeClass="active"
              to="title"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              >Top</Link> 


            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              >About</Link> 


            <Link
              activeClass="active"
              to="works"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              >Works</Link> 


            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {800}
              >Contact</Link> 


            </Navigation>
          </Header>
          <Drawer title=" ">
            <Navigation>

            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
                >About</Link> 

              <Link
                activeClass="active"
                to="works"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
                >Works</Link>

              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1000}
                >Contact</Link>

            </Navigation>
          </Drawer>
        </Layout>

      </div>
    )
  }
}
export default Nav;