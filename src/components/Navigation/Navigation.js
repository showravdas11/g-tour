import React from 'react';
import './Navigation.css'
import video from '../../bg-video.mp4'
import { Link } from 'react-router-dom';
{/* <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link> */ }

const Navigation = () => {
    return (
        <div>
            <section>
                <h1 className='first-head'>Where do you want to go?</h1>

                <div className='bg-vdo'>
                    <video autoPlay loop muted className='bg-vdo' src={video} type='video/mp4'></video>
                </div>
            </section>
        </div>
    );
};

export default Navigation;