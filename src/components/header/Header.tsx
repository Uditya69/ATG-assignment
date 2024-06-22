import { Navbar, Container, Nav, NavDropdown, Form } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/logo.svg";
import {
  FaSearch,
  FaCompass,
  FaStar,
  FaShoppingCart,
  FaBell,
  FaBookmark,
} from "react-icons/fa";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="w-full px-5 py-1">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <FiMenu className="text-black" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className=" grid">
          <Form className="flex items-center ml-auto">
            <input
              type="search"
              placeholder="Search"
              className="rounded-l-md p-2 outline-none border border-gray-300"
              aria-label="Search"
            />
            <button className="p-2 bg-purple-600 text-white rounded-r-md">
              <FaSearch />
            </button>
          </Form>
          <Nav className="ml-auto flex items-center">
            <NavDropdown
              title={
                <div className="flex items-center flex-row gap-1 m-auto">
                  <FaCompass className="mr-1 text-purple-600" size={22} />
                  <span>Explore</span>
                  <span className="ml-auto">
                    <BsChevronDown />
                  </span>
                </div>
              }
              id="explore-dropdown"
              className="mr-4"
            >
              <NavDropdown.Item href="#action/3.1">
                People-Community
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Places-Venues
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Programs-Events
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Product-Store
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Blogs</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <div className="flex items-center flex-row gap-1 m-auto">
                  <FaStar className="mr-1 text-purple-600" size={21} />
                  <span>Hobbies</span>
                  <span className="ml-auto">
                    <BsChevronDown />
                  </span>
                </div>
              }
              id="hobbies-dropdown"
              className="mr-4"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Something else
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#bookmark" className="mr-4 ">
              <FaBookmark size={20} color="#9333ea" />
            </Nav.Link>
            <Nav.Link href="#notifications" className="mr-4">
              <FaBell size={20} color="#9333ea" />
            </Nav.Link>
            <Nav.Link href="#cart" className="mr-4">
              <FaShoppingCart size={20} color="#9333ea" />
            </Nav.Link>

            <button className="border-2 border-purple-600 text-purple-600 px-3 py-2 rounded-md hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out">
              Sign in
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
