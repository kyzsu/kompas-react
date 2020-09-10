import React from 'react';
import './style.css';

export default function SlideArrow({ type }) {
  if (type !== 'prev' && type !== 'next') {
    throw Error('Invalid slide arrow type!');
  }

  if (type === 'prev') {
    return (
      <button className="slide__arrow">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 10.4 17.8"
          style={{ 'enable-background': 'new 0 0 10.4 17.8' }}
          xmlSpace="preserve"
        >
          <path d="M10.4,1.5c0,0.2-0.1,0.3-0.2,0.4l-7,7l7,7c0.1,0.1,0.2,0.3,0.2,0.4c0,0.2-0.1,0.3-0.2,0.4l-0.9,0.9c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.4-0.2L0.2,9.3C0.1,9.2,0,9.1,0,8.9c0-0.2,0.1-0.3,0.2-0.4l8.3-8.3C8.6,0.1,8.8,0,8.9,0s0.3,0.1,0.4,0.2l0.9,0.9C10.3,1.2,10.4,1.3,10.4,1.5L10.4,1.5z" />
        </svg>
      </button>
    );
  }

  if (type === 'next') {
    return (
      <button className="slide__arrow">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 10.4 17.8"
          style={{ 'enable-background': 'new 0 0 10.4 17.8' }}
          xmlSpace="preserve"
        >
          <path d="M10.4,8.9c0,0.2-0.1,0.3-0.2,0.4l-8.3,8.3c-0.1,0.1-0.3,0.2-0.4,0.2c-0.2,0-0.3-0.1-0.4-0.2l-0.9-0.9C0.1,16.6,0,16.5,0,16.3c0-0.2,0.1-0.3,0.2-0.4l7-7l-7-7C0.1,1.8,0,1.6,0,1.5s0.1-0.3,0.2-0.4l0.9-0.9C1.2,0,1.3,0,1.5,0S1.8,0,1.9,0.2l8.3,8.3C10.3,8.6,10.4,8.7,10.4,8.9L10.4,8.9z" />
        </svg>
      </button>
    );
  }
}
