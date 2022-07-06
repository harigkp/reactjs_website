import React from "react";

function Customer() {

  return (
      <div className="customers">
         <div className="container">
            <div className="row">
               <div className="col-sm-12">
                  <div className="titlepage text_align_center">
                     <h2>Customers Says </h2>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-md-12">
                  <div id="myCarousel" className="carousel slide customers_banne" data-ride="carousel">
                     <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                     </ol>
                     <div className="carousel-inner">
                        <div className="carousel-item active">
                           <div className="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="test_box text_align_center">
                                    <p>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typetext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                                    <i><img src="assets/images/test2.png" alt="#"/></i>
                                    <h4>Fitter Found</h4>
                                    <span>Industry's standard </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="test_box text_align_center">
                                    <p>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typetext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                                    <i><img src="assets/images/test2.png" alt="#"/></i>
                                    <h4>Fitter Found</h4>
                                    <span>Industry's standard </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="carousel-item">
                           <div className="container-fluid">
                              <div className="carousel-caption relative">
                                 <div className="test_box text_align_center">
                                    <p>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typetext of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type</p>
                                    <i><img src="assets/images/test2.png" alt="#"/></i>
                                    <h4>Fitter Found</h4>
                                    <span>Industry's standard </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <i className="fa fa-angle-left" aria-hidden="true"></i>
                     <span className="sr-only">Previous</span>
                     </a>
                     <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <i className="fa fa-angle-right" aria-hidden="true"></i>
                     <span className="sr-only">Next</span>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}

export default Customer;