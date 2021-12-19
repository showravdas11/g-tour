import React from 'react';
import './ValueableTips.css'

const ValueableTips = () => {
    return (
        <div>
            <div className='valueable-head'>
                <h2>Best Value Trips</h2>
                <p>Best offers trips from us</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='french'>
                            <div className='value-img'>
                                <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg" alt="" />
                                <div className="price">$5000</div>
                            </div>
                            <div className='value-card-head'>
                                <h4>French Autumn</h4>
                                <p>City Tours, Urban</p>
                            </div>

                            <div className='date-time'>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <span>4 reviews</span>
                                </div>

                                <p><i class="far fa-clock"></i> 5 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='french'>
                            <div className='value-img'>
                                <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg" alt="" />
                                <div className="price">$6000</div>
                            </div>
                            <div className='value-card-head'>
                                <h4>French Autumn</h4>
                                <p>City Tours, Urban</p>
                            </div>

                            <div className='date-time'>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <span>4 reviews</span>
                                </div>

                                <p><i class="far fa-clock"></i> 6 days</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='french'>
                            <div className='value-img'>
                                <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg" alt="" />
                                <div className="price"><del className='prices'>$3000</del>$2500</div>
                            </div>
                            <div className='value-card-head'>
                                <h4>French Autumn</h4>
                                <p>City Tours, Urban</p>
                            </div>
                            <div className='date-time'>
                                <div>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <span>4 reviews</span>
                                </div>

                                <p><i class="far fa-clock"></i> 5 days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValueableTips;