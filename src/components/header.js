import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
class Header extends Component {
  render() {
    return (
      <div className="Haeder">
        <header className="homepage_top">
          <Nav
            className="nav"
            justified={false}
            style={{ justifyContent: "center", backgroundColor: "blue" }}
          >
            <NavItem>
              <NavLink className="nav-link" href="/">
                Main
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/blog">
                Blog
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/aboutus">
                {" "}
                About Us{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/albumclients">
                {" "}
                Album Clients{" "}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" href="/contacts">
                {" "}
                Contacts{" "}
              </NavLink>
            </NavItem>
          </Nav>
        </header>
      </div>
    );
  }
}

export default Header;
