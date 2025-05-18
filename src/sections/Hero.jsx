import React, {useState} from 'react'

import { AiOutlinePlayCircle, AiOutlineAppstoreAdd, AiOutlineCloseCircle } from 'react-icons/ai';
import ImageSlide from '../Components/ImageSlide';

const Hero = ({ movie: { name, overview, backdrop_path } }) => {
    const urlPath = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;
  return (
    <div className='hero'>
        <video
            src='Intro.mp4'
            loop
            autoPlay
            muted
            className='hero-video'
        />
        <h1 className='hero-heading'>{name}</h1>
        <div className='hero-btnContainer'>
            <button className='hero-btnPlayer' onClick={() => alert('not a movie!')}>
                <AiOutlinePlayCircle className='hero-btnPlayer-play' />
                <p>Play</p>
            </button>
            <button className='hero-btnMyList'>
                <AiOutlineAppstoreAdd className='hero-btnMyList-add' />
                <p>My List</p>
            </button>
        </div>
        <p className='hero-overview'>{overview}</p>
        <div className='hero-imgContainer'>
            <img src={urlPath} className='hero-img' />
            <button className='hero-btnWatch'>
                <AiOutlinePlayCircle className='hero-btnPlayer-play' />
                <p>Watch Now</p>
            </button>
        </div>
        <div className='hero-fadeBottom'></div>
        <div className='hero-slider'>
            <ImageSlide />
        </div>
    </div>
  )
}

export default Hero