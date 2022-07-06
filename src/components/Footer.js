import React from "react";

function Footer() {

  return (
      <footer>
         <div className="footer">
            <div className="container">
               <div className="row">
                  <div className="col-md-12 ">
                     <div className="letter text_align_left">
                        <h2>Contact Us</h2>
                     </div>
                  </div>
                  <div className="col-md-5">
                     <form id="request" className="main_form">
                        <div className="row">
                           <div className="col-md-12 ">
                              <input className="cont_in" placeholder="Full Name" type="type" name=" Name"/> 
                           </div>
                           <div className="col-md-12">
                              <input className="cont_in" placeholder="Your Email" type="type" name="Email"/> 
                           </div>
                           <div className="col-md-12">
                              <input className="cont_in" placeholder="Phone Number" type="type" name="Phone Number"/>                          
                           </div>
                           <div className="col-md-12">
                              <input className="cont_in" placeholder="Your Words" type="type" name="Words"/> 
                           </div>
                           <div className="col-md-12">
                              <button className="send_btnt">Send</button>
                           </div>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-4 ">
                     <ul className="conta">
                        <li><i className="fa fa-map-marker" aria-hidden="true"></i>Locations 
                        </li>
                        <li><i className="fa fa-phone" aria-hidden="true"></i>+01 1234567890</li>
                        <li> <i className="fa fa-envelope" aria-hidden="true"></i><a href="#"> demo@gmail.com</a></li>
                     </ul>
                  </div>
                  <div className="col-md-3">
                     <div className="follow text_align_left">
                        <h3>Follow Us</h3>
                        <ul className="social_icon ">
                           <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="col-md-12">
                     <div className="follow letter text_align_left">
                        <h3>Newsletter</h3>
                        <form className="form_subscri">
                           <input className="newsl" placeholder="Email" type="text" name="Email"/>
                           <button className="subsci_btn">subscribe</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <p>© 2022 All Rights Reserved. Design by Hari Templates</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </footer>
  );
}

export default Footer;