import React from 'react';
import {Container,Row,Col,ListGroup,ListGroupItem} from "reactstrap";
import {Link} from 'react-router-dom';
import './footer.css'

import logo from "../../assets/images/eco-logo.png";
const Footer = () => {
    const year=new Date().getFullYear();
    return (
    <footer className="footer">
                <Container>
                    <Row>
                        <Col lg="4">
                            <div className="logo">

                                <div>
                                    <h1 className="text-white">FurnitureBari<br/>Your Best Choice</h1>
                                </div>

                            </div>
                            <p className="footer_text mt-4">
                                FurnitureBari.com offers a unique selection of stylish, contemporary, and chic furniture online.
                            </p>
                        </Col>
                        <Col lg="3">
                              <div className="footer_quick_links">
                                  <h4 className="quick_links_title">Top Categories</h4>
                                  <ListGroup >
                                      <ListGroupItem className="ps-0 border-0">
                                          <Link to="#" >Mobile Phones</Link>
                                      </ListGroupItem>

                                      <ListGroupItem className="ps-0 border-0">
                                          <Link to="#" >Mordern Sofa</Link>
                                      </ListGroupItem>

                                      <ListGroupItem className="ps-0 border-0">
                                          <Link to="#" >Arm Chair</Link>
                                      </ListGroupItem>

                                      <ListGroupItem className="ps-0 border-0">
                                          <Link to="#" >Smart Watches</Link>
                                      </ListGroupItem>
                                  </ListGroup>
                              </div>
                        </Col>
                        <Col lg="2">
                            <div className="footer_quick_links">
                                <h4 className="quick_links_title">Useful Links</h4>
                                <ListGroup >
                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/shop" >Shop</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/cart" >Cart</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="/login" >Login</Link>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0">
                                        <Link to="#" >Privacy Policy</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="footer_quick_links">
                                <h4 className="quick_links_title">Contact</h4>
                                <ListGroup className="footer_contact" >
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <span><i className="ri-map-pin-line"></i></span>
                                        <p>131,Kazi Nazrul Avenue,Dhaka,Bangladesh</p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <span><i className="ri-phone-line"></i></span>
                                        <p>01768726911</p>
                                    </ListGroupItem>

                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2" >
                                        <span><i className="ri-mail-line"></i></span>
                                        <p>furniturebari@gmail.com</p>
                                    </ListGroupItem>


                                </ListGroup>
                            </div>
                        </Col>

                        <Col lg="12">
                            <p className="footer_copyright"><span><i className="ri-copyright-line"></i></span>Copyright {year} developed by Rakibul islam.All Right reserved</p>
                        </Col>
                    </Row>
                </Container>
    </footer>
    );
};

export default Footer;