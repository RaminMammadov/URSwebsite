import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import React from 'react';
import URSmobileHeader from "../Components/URSmobileHeader";
import URSscrollHeader from "../Components/URSscrollHeader";
import URSapplyForm from '../Components/URSapplyForm';
import { Link } from "react-router-dom";
import BreadcumpStyle from '../assets/css/Breadcump.module.css';
import URSmentors from '../Components/URSmentors';
import URSabout from "../Components/URSabout";
import URSfooter from '../Components/URSfooter';

export default function URSaboutPage() {
  window.scrollTo(0, 0);
  return (
    <div className="URSaboutUsPage">
      <div className={BreadcumpStyle.breadcump}>
        <Link to={'/'}>Ana sayfa</Link>/
        <Link className={BreadcumpStyle.active}>Hakkımızda</Link>
      </div>

      <URSmobileHeader />
      <URSscrollHeader />
      <URSabout />
      <URSmentors />
      <URSapplyForm />
      <URSfooter />
    </div>
  )
}
