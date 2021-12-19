import React from 'react';
import './Article.css'

const Article = () => {
    return (
        <div>
            <div className='article-head'>
                <h2>Articles & Tips</h2>
                <p>Explore some of the best tips from around the world</p>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className='article'>
                            <div className='article-img'>
                                <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg" alt="" />
                            </div>
                            <div className='article-text'>
                                <p className='article-date'>DECEMBER 10, 2020</p>
                                <h4>Memorial Day to Someone Told Me to Travel</h4>
                                <p className='article-texts'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>

                                <p className='read-btn'>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='article'>
                            <div className='article-img'>
                                <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg" alt="" />
                            </div>
                            <div className='article-text'>
                                <p className='article-date'>DECEMBER 10, 2020</p>
                                <h4>Memorial Day to Someone Told Me to Travel</h4>
                                <p className='article-texts'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>

                                <p className='read-btn'>Read More</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='article'>
                            <div className='article-img'>
                                <img className="img-fluid" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg" alt="" />
                            </div>
                            <div className='article-text'>
                                <p className='article-date'>DECEMBER 10, 2020</p>
                                <h4>Memorial Day to Someone Told Me to Travel</h4>
                                <p className='article-texts'>Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache...</p>

                                <p className='read-btn'>Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Article;