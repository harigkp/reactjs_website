import React from "react";

function Package() {

  return (
      <div className="our_packages">
         <div className="container">
            <div className="row d_flex">
               <div className="col-md-12">
                  <form id="table" className="table_form">
                     <div className="row">
                        <div className="col-md-12">
                           <div className="titlepage text_align_left ">
                              <h3>Our Packages</h3>
                           </div>
                        </div>
                        <div className="col-md-4">
                           <label>Select Your Destination :</label>
                           <input className="contactus" placeholder="All Destinations" type="text" name="destinations"/> 
                        </div>
                        <div className="col-md-4">
                           <label>Select Your Destination :</label>
                           <input type="text" className="contactus" id="my_date_picker" placeholder="mm-dd-yy" /> 
                        </div>
                        <div className="col-md-4">
                           <label>Select Your Destination :</label>
                           <select id='seluser' className="contactus" >
                              <option value='0'>$1090</option>
                              <option value='1'>$1100</option>
                              <option value='2'>$1160</option>
                              <option value='3'>$1190</option>
                           </select>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Search</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="col-md-12">
                  <div className="filter_main">
                     <a className="read_more" href="#">&nbsp;vvv<img src="assets/images/filter.png" alt="#"/> More Filters </a>
                  </div>
               </div>
               <div className="col-md-8 offset-md-2">
                  <div className="typologies">
                     <div className="row">
                        <div className="col-md-3">
                           <div className="typolo">
                              <span>typologies :</span>
                              <form>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio" /> <span className="label-text">Relax </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text">Cultural </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text">Sport </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text">History </span>
                                    </label>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="typolo">
                              <span>Durations :
                              </span>
                              <form>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio" /> <span className="label-text"> 2 - 4 Days </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text"> 2 - 3 Days </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                       <input type="radio" name="radio"/> <span className="label-text"> 2 - 5 Days </span>
                                       </label> 
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                       <input type="radio" name="radio"/> <span className="label-text"> 2 - 6 Days </span>
                                       </label>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="typolo">
                              <span>Difficulty :
                              </span>
                              <form>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio" /> <span className="label-text">High  </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text">Low  </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text">Medium </span>
                                    </label>
                                 </div>
                              </form>
                           </div>
                        </div>
                        <div className="col-md-3">
                           <div className="typolo">
                              <span>Min Age :
                              </span>
                              <form>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio" /> <span className="label-text"> 10 Years  </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text"> 25 Years  </span>
                                    </label>
                                 </div>
                                 <div className="form-check">
                                    <label className="marg_bottom0">
                                    <input type="radio" name="radio"/> <span className="label-text"> 40 Years </span>
                                    </label>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}

export default Package;