import React from 'react'

const Backdrop = ({ toggleBackdrop, show }) => show ? <div onClick={toggleBackdrop} className='backdrop'></div> : null;

export const MovieModel = ({ show, closed, children, backgroundImage }) => {
    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundImage})`,
    };
    console.log(show);
  return (
    <div>
        <Backdrop show={show} toggleBackdrop={closed} />
        <div
            style={backgroundStyle}
            className={ show ? "movie show" : "movie hide" }
        >
            {children}
        </div>
    </div>
  )
};
