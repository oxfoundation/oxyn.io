import React, { Component } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends Component {

  static defaultProps = {
    changeStyleOnScroll: false,
    changeStyleOnScrollHeight: 200,
    changeStyleOnScrollClass: "--white",
    isFixed: false,
    isFixedClass: "--fixed"
  }


  constructor(props) {
    super(props);
    this.headerStyleChange = this.headerStyleChange.bind(this);
  }

  componentDidMount() {
    const { changeStyleOnScroll } = this.props;

    if (changeStyleOnScroll) {
      window.addEventListener("scroll", this.headerStyleChange)
    }
  }

  /**
   * For header style
   */
  headerStyleChange() {
    const { changeStyleOnScroll, changeStyleOnScrollHeight, changeStyleOnScrollClass } = this.props;
    const windowsScrollTop = window.pageYOffset;

    if ( windowsScrollTop > changeStyleOnScrollHeight ) {
      this.setHeaderStyle(changeStyleOnScrollClass);
    } else {
      this.removeHeaderStyle(changeStyleOnScrollClass);
    }
  }

  setHeaderStyle(addedClass) {
    document.body.getElementsByTagName("header")[0].classList.add(addedClass);
  }

  removeHeaderStyle(addedClass) {
    document.body
      .getElementsByTagName("header")[0]
      .classList.remove(addedClass);
  }

  componentWillUnmount() {
    const { changeStyleOnScroll } = this.props;

    if (changeStyleOnScroll) {
      window.removeEventListener("scroll", this.headerStyleChange);
    }
  }

  render() {
    var {isFixed, isFixedClass} = this.props

    return (
      <header  className={`header ${isFixed?isFixedClass:""} ${this.props.className}`}>
        <Navbar className="navbar-expand-md justify-content-between navbar-light">
          <div className="container">
            <NavbarBrand href="/" className="logo">
              <div className="logo__img logo__img--mono">
                <img
                  src="/static/images/logo-mono.svg"
                  className="d-inline-block align-top"
                  height="40"
                  alt="Oxyn Logo"
                />
              </div>
              <div className="logo__img logo__img--colorful">
                <img
                  src="/static/images/logo-colorful.svg"
                  className="d-inline-block align-top"
                  height="40"
                  alt="Oxyn Logo"
                />
              </div>
            </NavbarBrand>

            <NavbarToggler />

            <Collapse navbar className="justify-content-end">
              {true && (
                <Nav navbar>
                  <NavItem>
                    <Link href="/">
                      <NavLink>Home</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/how-it-works">
                      <NavLink>How it works</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/about-us">
                      <NavLink>About Us</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/faq">
                      <NavLink>FAQ</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/contact">
                      <NavLink>Contact</NavLink>
                    </Link>
                  </NavItem>
                </Nav>
              )}
              {false && (
                <Nav navbar>
                  <NavItem>
                    <NavLink href="javascript:void(0)" onClick={this.doLogout}>
                      Log Out
                    </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Lasha
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        {/* <Link className={this.state.InvestoresClass} to='/dashboard'>Dashboard</Link> */}
                      </DropdownItem>
                      <DropdownItem>
                        {/* <Link className={this.state.InvestoresClass} to='/profile'>My Profile</Link> */}
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        {/* <NavLink onClick={this.doLogout} >Log Out</NavLink> */}
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              )}
            </Collapse>
          </div>
        </Navbar>
      </header>
    );
  }
}

export default Header;
