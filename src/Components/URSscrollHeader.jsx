import React, { useState,useEffect, useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom';
import style from '../assets/css/URSscrollHeader.module.css';
import Logo from '../assets/images/11.svg';
import Pages from '../Routing/Pages.json';
import axios from 'axios';

export default function NavbarScroll() {
  const url = 'https://api.ursdanismanlik.com/v1';

  const activeClassName = style.active;
  const navlinkClassName = style.link;
  let [showDropMenu, setShowDropMenu] = useState(false);
  let subMenu = [];

  const showMenu = useCallback((e) => {
    setShowDropMenu(true);
  })
  const hideMenu = useCallback((e) => {
    setShowDropMenu(false);
  })
  const showMenuHover = useCallback(() => {
    setShowDropMenu(true);
  })
 
  const [dataServiceAndEDucation,setDataServiceAndEDucation] = useState([]);
  const getServiceAndEducationData = () => {
    axios
      .get(`${url}/services`)
      .then(response => setDataServiceAndEDucation(response.data.data))
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getServiceAndEducationData();
  },[])

  return (
    <div className={style.URSscrollHeader}>
      <div className="container">
        <div className={style.header}>
          <div className="row align-items-center">
            <div className="col-2">
              <div className={style.logo}><Link to={'/'}><img src={Logo} alt="Logo" id={style.logo} /></Link></div>
            </div>

            <div className="col-8">
              <nav className={style.navigation}>
                <ul className={style.navigationList}>
                  <li className={style.navigationListItem}>
                    <NavLink to={'/URSaboutPage'} className={({ isActive }) =>
                      isActive ? activeClassName : navlinkClassName
                    }>Hakkımızda</NavLink>
                  </li>
                  <li className={style.navigationListItem}>
                    <NavLink onClick={(e) => e.preventDefault()} to={'/URSserviceAndEducationDetail'} onMouseEnter={showMenu} onMouseLeave={hideMenu} id={style.dropDownMenuLink} className={({ isActive }) =>
                      isActive ? activeClassName : navlinkClassName
                    }>Hizmet & Eğitim</NavLink>
                    {showDropMenu ? <ul className={style.servicesDropdown} onMouseEnter={showMenuHover} onMouseLeave={hideMenu}>
                      {
                        dataServiceAndEDucation.map(data => {
                            return <li className={style.dropDownItem}><NavLink to={`/URSserviceAndEducationDetail/:${data.title}`} className={style.dropDownLink}>{data.title}</NavLink></li>
                        })
                     }
                    </ul> : null}
                  </li>
                  <li className={style.navigationListItem}>
                    <NavLink to={'/URSportfolioPage'} className={({ isActive }) =>
                      isActive ? activeClassName : navlinkClassName
                    }>Portfolio</NavLink>
                  </li>
                  <li className={style.navigationListItem}>
                    <NavLink to={'/URScontactPage'} className={({ isActive }) =>
                      isActive ? activeClassName : navlinkClassName
                    }>İletişim</NavLink>
                  </li>

                </ul>
              </nav>
            </div>

            <div className="col-2 text-end">
              <div className={style.applyButton}>
                <a href='#ApplyForm' className={style.applyButtonLink}>Başvuru yap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
