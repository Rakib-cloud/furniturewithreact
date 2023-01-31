import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Helmet from "../components/Helmet/Helmet";
import {Container,Row,Col} from "reactstrap";
import heroimg from '../assets/images/hero-img.png'
import '../Style/home.css';
import {motion} from "framer-motion";
import Services from "../Services/Services";
import ProductList from "../components/UI/ProductList";
import products from '../assets/data/products';
import counterimg from '../assets/images/counter-timer-img.png';
import Clock from "../components/UI/Clock";
const Home = () => {
    const [trendingProducts,setTrendingProducts]=useState([]);

    const [bestsaleProducts,setBestsaleProducts]=useState([]);

    const [mobilephone,setMobilephone]=useState([]);

    const [wirelessProduct,setwirelessProduct]=useState([]);

    const [popularProduct,setpopularProduct]=useState([]);

    const year=new Date().getFullYear()
// data filtering only showing chair category data
    useEffect(()=>{
        const filterproduct =products.filter((item)=>item.category == "chair");

        const filterproductbestsale =products.filter((item)=>item.category == "sofa");

        const filternewarrivals =products.filter((item)=>item.category == "mobile");

        const filterwirelessproduct =products.filter((item)=>item.category == "wireless");

        const filterpopularproduct =products.filter((item)=>item.category == "watch");
        setTrendingProducts(filterproduct);

        setBestsaleProducts(filterproductbestsale);

        setMobilephone(filternewarrivals);
        setwirelessProduct(filterwirelessproduct);
        setpopularProduct(filterpopularproduct);
    },[]);


    return (
       <Helmet title={"Home"}>
                <section className="hero_section">
                  <Row>
                      <Col lg='6' md='6'>
                            <div className="hero_content">
                               <p className="hero_subtitle">Trending product in{year}</p>
                                <h2>Make your Interior More Minimalist and Mordern</h2>
                                <p>FurnitureBari.com offers a unique selection of stylish, contemporary, and chic furniture online.
                                    Our online furniture range includes sofas, beds, dining tables, TV units, wardrobes, dressing tables, and lots more.
                                    All our wooden furniture designs are available online at furniturebari.com.</p>
                                <motion.button whileTap={{scale:1.3}} className="buy_btn"><Link to='/shop'>SHOP NOW</Link></motion.button>
                            </div>


                      </Col>


                      <Col lg='6' md='6'>
                           <div className="hero_img">
                                <img src={heroimg}/>
                           </div>
                      </Col>
                  </Row>
                </section>

           <Services/>
           {/*trending product displaywork */}
           <section className="trending_products">
               <Container>
                   <Row>
                       <Col lg='12' className="text-center">
                           <h2 className="section_title">Trending Products</h2>
                       </Col>
                       <ProductList data={trendingProducts}/>
                   </Row>
               </Container>
           </section>

           {/*bestsales product work*/}
           <section className="best_sales">
               <Container>
                   <Row>
                       <Col lg='12' className="text-center">
                           <h2 className="section_title">Best Sales</h2>
                       </Col>

                       <ProductList data={bestsaleProducts}/>
                   </Row>
               </Container>
           </section>

           {/*timercount work*/}
           <section className="timer_count">
                 <Container>
                     <Row>
                         <Col lg="6" md="6">
                             <div className="clock_top_content">
                                  <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                                 <h3 className="text-white fs-6 mb-3">Quality Armchair</h3>
                             </div>
                             <Clock/>
                             <motion.button whileTap={{scale:1.2}} className="buy_btn store_btn"><Link to="/shop">visit Store</Link></motion.button>
                         </Col>

                         <Col lg="6" md="6" className="text-end">
                              <img src={counterimg}/>
                         </Col>

                     </Row>
                 </Container>
           </section>

           <section className="new_arrivals">
               <Container>
                   <Row>
                       <Col lg='12' className="text-center mb-5">
                           <h2 className="section_title">New Arrivals</h2>
                       </Col>

                       <ProductList data={mobilephone}/>

                       <ProductList data={wirelessProduct}/>
                   </Row>
               </Container>
           </section>

           <section className="popular_category">
               <Container>
                   <Row>
                       <Col lg='12' className="text-center mb-5">
                           <h2 className="section_title">Popular in Category</h2>
                       </Col>

                       <ProductList data={popularProduct}/>


                   </Row>
               </Container>
           </section>
       </Helmet>
    );
};

export default Home;