import React from 'react'
import style from '../assets/css/URSscrollBackToTop.module.css';
import { FaArrowUp } from 'react-icons/fa';

export default function URSscrollBackToTop() {
  return (
   <div className={style.URSscrollBackToTop} onClick = {() => window.scrollTo(0,0)}>
        <FaArrowUp />
   </div>
  )
}

