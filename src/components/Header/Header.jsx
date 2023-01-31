import React,{useEffect,useRef} from 'react';
import {Container,Row} from "reactstrap";
import logo from '../../assets/images/eco-logo.png'
import {NavLink} from "react-router-dom"
import user from '../../assets/images/user-icon.png'
import {motion} from "framer-motion";
import './Header.css';
const nav_link =[
    {
        path:'home',
        display:'Home'
    },
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
]
const Header = () => {
    const headerRef =useRef(null)

    const menuRef=useRef(null);
    const stickyHeaderfunc = ()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        });
    };
    useEffect(()=>{
          stickyHeaderfunc();
          return ()=>window.removeEventListener("scroll",stickyHeaderfunc);
    });

    const menuToggle= ()=> menuRef.current.classList.toggle('active_menu')
    return (
        <header  className="header" ref={headerRef}>
       <Container>
           <Row>
               <div className="nav_wrapper">
                    <div className="logo">
                       <img src={logo}/>
                        <div>
                            <h1>FurnitureBari<br/>Your Best Choice</h1>
                        </div>
                    </div>

                   <div className="navigation" ref={menuRef} onClick={menuToggle} >
                         <ul className="menu">

                             {
                               nav_link.map((item,index)=>(
                                   <li className="nav-item" key={index}>
                                       <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav_active':' '}>{item.display}</NavLink>
                                   </li>
                               ))
                             }
                         </ul>
                   </div>


                   <div className="nav_icons">
                         <span className="fav-icon">
                        <i className="ri-heart-line"></i>
                             <span className="badge">1</span>
                         </span>
                         <span className="cart-icon">
                         <i className="ri-shopping-bag-line"></i>
                             <span className="badge">1</span>
                         </span>
                       <span>< motion.img whileTap={{scale:1.2}} src={user}/></span>

                       <div className="mobile_menu">
                           <span onClick={menuToggle}><i className="ri-menu-line"></i></span>
                       </div>
                   </div>
               </div>
           </Row>
       </Container>
        </header>
    );
};

export default Header;