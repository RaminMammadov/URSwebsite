import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import React, { useState, useCallback } from 'react';
import URSmobileHeader from "../Components/URSmobileHeader";
import URSscrollHeader from "../Components/URSscrollHeader";
import ApplyForm from '../Components/URSapplyForm';
import BreadcumpStyle from '../assets/css/Breadcump.module.css';
import URSfooter from '../Components/URSfooter';
import URSallQuestions from "../Components/URSallQuestions";
import { Link } from "react-router-dom";

export default function URSfrequentlyAskedQuestionsAllQuestions() {
  window.scrollTo(0,0);
  return (    
    <>
      <div className={BreadcumpStyle.breadcump}>
        <Link to={'/'}>Ana sayfa</Link> /
        <Link className={BreadcumpStyle.active}>Bize sıkca sorulan sorular</Link>
      </div>
      <URSmobileHeader />
      <URSscrollHeader />

      <URSallQuestions />


      <ApplyForm />
      <URSfooter />
    </>
  )
}
