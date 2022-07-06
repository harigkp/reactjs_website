import React from "react";

function Header() {

  return (
   <div className="header">
   <div className="top_header">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <div className="select_main">
                  <div className="sign">
                     <div className="niceCountryInputSelector se_flag" data-selectedcountry="US" data-showspecial="false" data-showflags="true" data-i18nall="All selected"  data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback" >
                     </div>
                     <span> <a href="#">Sign Up</a> </span>   
                  </div>
                  <ul className="top_infomation">
                     <li><img src="assets/images/ti_call.png" alt="#"/>Call : +1234567890</li>
                     <li><img src="assets/images/ti_mail.png" alt="#"/><a href="#"> demo@gmail.com</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="header_midil">
      <div className="container">
         <div className="row d_flex">
            <div className=" col-md-2 col-sm-3 logo_section">
               <div className="full">
                  <div className="center-desk">
                     <div className="logo">
                        <a href=""><img src="assets/images/logo.png" alt="#" /></a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-sm-9 col-md-8">
               <nav className="navigation navbar navbar-expand-md navbar-dark ">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarsExample04">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active"><a className="nav-link" href="">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Pakages </a></li>
                        <li className="nav-item"><a className="nav-link" href="#">client </a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact Us</a></li>
                     </ul>
                  </div>
               </nav>
            </div>
            <div className="col-md-2  d_none">
               <ul className="email text_align_right">
                  <li><a href="#"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i>   </a></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
  );
}

export default Header;