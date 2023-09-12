import React from 'react';
import './Banner.scss';
import BannerImg from '../../../assets/banner-img.png';

    const Banner = () => {
    return (
        <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>Coal</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolor minima nihil voluptate, dolore ipsam ad in non blanditiis quas, ut laudantium officiis, quisquam hic iste voluptas explicabo nobis unde.
                </p>
                <div className="ctas">
                    <div className='banner-cta'>Read More</div>
                    <div className='banner-cta v2'>Shop Now</div>
                </div>
            </div>
            <img className='banner-img' src={BannerImg} alt="" />
        </div>
        </div>
    );
};

export default Banner;
