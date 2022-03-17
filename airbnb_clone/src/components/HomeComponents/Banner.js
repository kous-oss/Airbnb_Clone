import React,{useState} from 'react';
import './CSS/Banner.css';
import Search from './Search';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Banner = () => {

    const [showSearch, setShowSearch] = useState(false);

    const navigate = useNavigate();
    let data = !showSearch ? 'Show Dates' : 'Hide'

    return (
        <>
        {showSearch && <Search/>}
        <Button className='show_dates' onClick={() => setShowSearch(!showSearch)}>{data}</Button>
        <div className="banner-container" style={{opacity : showSearch ? '0' : '1'}}>
        
        <div className='banner-details'>
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <button className='explore' onClick={() => navigate('./searchPage')} variant="outlined">Explore Nearby</button>
        </div>

        <img className='banner' src='https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg' alt=''/>
        
      </div>
        </>
      
    );
};

export default Banner;