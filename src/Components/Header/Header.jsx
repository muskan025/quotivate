import React from 'react';
import './Header.scss';
 import star from '../../images/star.png';

 
import { Headersvg } from '../svgs/headersvg/Headersvg';
export const Header = ({img,heading,para}) => {
  return (
    <div className="intro" >
    <img src={img} alt="" className='intro-img' />
    <span>{heading}</span>
    {/* <img src={star} alt="" className='star1' />
    <img src={star} alt="" className='star2' />
    <img src={star} alt="" className='star3' />
    <img src={star} alt="" className='star4' />
    <img src={star} alt="" className='star5' /> */}
      <p className='intro-text'>
      {para}
      </p>
      <Headersvg/>
       
    </div>
  )
}
