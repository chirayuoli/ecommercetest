import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">About Us</h5>
            <p>
              Pets Nepal is a one stop destination for pet owners and those who
              want to get a new pet.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Market</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Profile</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;
