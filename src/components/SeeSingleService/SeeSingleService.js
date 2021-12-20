import React, { useState, useEffect } from 'react';
import './SeeSingleService.css'

const SeeSingleService = ({ single }) => {
    const { name, descliption, time, price, img, } = single;
    return (
        <>
            <div class="card mb-3 mt-5" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p><i class="far fa-clock"></i> {time}</p>
                            <h5 class="card-title">{name}</h5>
                            <p class="card-text">{descliption}</p>
                            <p class="card-text">{price}</p>
                            <div className='d-flex justify-content-around'>
                                <p className='book-btn'>Book Now</p>
                                <p className='tour-detail'>Tour Details</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SeeSingleService;