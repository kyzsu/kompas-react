import React from 'react';
import './style.css';

export default function SearchBoxButton() {
  return (
    <button className="searchbox__button" type="button" id="button-addon2">
      <svg
        className="searchbox__icon"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 32.6 32"
        xmlSpace="preserve"
        fill="#868686"
      >
        <path
          d="M6.9,22.9l2.3,2.3L2.3,32L0,29.7L6.9,22.9L6.9,22.9z M19.6,22.4c-5.4,0-9.8-4.3-9.8-9.6c0-5.3,4.4-9.6,9.8-9.6c5.4,0,9.8,4.3,9.8,9.6C29.4,18.1,25,22.4,19.6,22.4L19.6,22.4z M19.6,0C12.4,0,6.5,5.7,6.5,12.8s5.8,12.8,13.1,12.8c7.2,0,13.1-5.7,13.1-12.8S26.8,0,19.6,0L19.6,0z"
        />
      </svg>
    </button>
  );
}
