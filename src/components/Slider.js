import React from "react";

function Slider() {

  return (
   
      <div className="full_bg">
         <div className="slider_main">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     
                     <div id="carouselExampleIndicators" className="carousel slide">
                        <ol className="carousel-indicators">
                           <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                           
                           <div className="carousel-item active">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div  className="col-md-10 offset-md-1">
                                       <div className="board">
                                          <h1>Now start # Your traveling </h1>
                                          <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed towhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                          <a className="read_more" href="#">Read More</a>&nbsp;<a className="read_more" href="#">Contact us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="carousel-item">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div  className="col-md-10 offset-md-1">
                                       <div className="board">
                                          <h1>Now start ##########  Your traveling </h1>
                                          <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed towhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                          <a className="read_more" href="#">Read More</a>&nbsp;<a className="read_more" href="#">Contact us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           
                           <div className="carousel-item">
                              <div className="carousel-caption relative">
                                 <div className="row">
                                    <div  className="col-md-10 offset-md-1">
                                       <div className="board">
                                          <h1>Now start # Your traveling </h1>
                                          <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed towhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to</p>
                                          <a className="read_more" href="#">Read More</a>&nbsp;<a className="read_more" href="#">Contact us</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                        <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        <span className="sr-only">Next</span>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  );
}

export default Slider;