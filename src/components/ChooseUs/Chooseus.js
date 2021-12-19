import React from 'react';
import './Chooseus.css'

const Chooseus = () => {
    return (
        <div>
            <div className='choose-head'>
                <h2>Why Choose Us</h2>
                <p>Here are reasons you should plan trip with us</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='destination-img'>
                            <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" alt="" />
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-center'>Handpicked Hotels</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum pariatur magnam aut quae dolorum!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='destination-img'>
                            <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" alt="" />
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-center'>Handpicked Hotels</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum pariatur magnam aut quae dolorum!</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='destination-img'>
                            <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" alt="" />
                        </div>
                        <div className='mt-3'>
                            <h2 className='text-center'>Handpicked Hotels</h2>
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae laborum pariatur magnam aut quae dolorum!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;