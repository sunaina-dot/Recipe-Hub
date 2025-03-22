import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${searchQuery}`;
    }
  };

  return (
    <>
      <Navbar expand="lg" bg="white" fixed="top" className="shadow-sm">
        <Container>
          {/* Brand Logo */}
          <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
            🍳 RecipeHub
          </Navbar.Brand>

          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Search Bar - Centered on larger screens, stacked on mobile */}
            <Form className="d-flex mx-auto my-2 my-lg-0" onSubmit={handleSearch}>
              <FormControl
                type="search"
                placeholder="Search recipes..."
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="outline-primary">🔍</Button>
            </Form>

            {/* Navigation Links */}
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/post">➕ Post Recipe</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
              <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Prevent content from being hidden behind navbar */}
      <div style={{ marginTop: "70px" }}></div>
    </>
  );
}