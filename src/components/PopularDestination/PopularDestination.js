import React from 'react';
import './PopularDestination.css'

const PopularDestination = () => {
    return (
        <div>
            <div>
                <div className='popular-head'>
                    <h2>Popular Destinations</h2>
                    <p className='popula-heading'>World's best tourist destinations</p>
                </div>
                <div className='container popular-images'>
                    <div className="row">
                        <div className="col-md-3 images">
                            <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg" alt="" />
                            <div className="Tokyo">Tokyo</div>
                        </div>
                        <div className="col-md-3 images">
                            <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg" alt="" />
                            <div className="Tokyo">Seoul</div>
                        </div>
                        <div className="col-md-3 images">
                            <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg" alt="" />
                            <div className="Tokyo">Paris</div>
                        </div>
                        <div className="col-md-3 images">
                            <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg" alt="" />
                            <div className="Tokyo">London</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularDestination;