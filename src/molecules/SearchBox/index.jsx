import React from 'react';
import SearchBoxInput from '../../atoms/SearchBoxInput';
import SearchBoxButton from '../../atoms/SearchBoxButton';
import './style.css';

export default function SearchBox() {
  return (
    <div class="input-group searchbox">
      <SearchBoxInput />
      <div class="input-group-append">
        <SearchBoxButton />
      </div>
    </div>
    
  );
}