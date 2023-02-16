import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import React from 'react';
import URSmobileHeader from "../Components/URSmobileHeader";
import URSscrollHeader from "../Components/URSscrollHeader";
import ApplyForm from '../Components/URSapplyForm';
import { Link } from "react-router-dom";
import style from '../assets/css/URScontactAndLocation.module.css';
import BreadcumpStyle from '../assets/css/Breadcump.module.css';
import URSportfolio from '../Components/URSportfolio';
import URSfooter from '../Components/URSfooter';


export default function Portfolio() {
  window.scrollTo(0, 0);
  return (
    <div className={style.URSportfolioPage}>
      <div className={BreadcumpStyle.breadcump}>
        <Link to={'/'}>Ana sayfa</Link>/
        <Link className={BreadcumpStyle.active}>Portfolio</Link>
      </div>


      <URSmobileHeader />
      <URSscrollHeader />
      <URSportfolio />
      <ApplyForm />
      <URSfooter />
    </div>
  )
}
