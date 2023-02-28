import React, { useState,useEffect, useCallback } from 'react';
import style from '../assets/css/URShomeHead.module.css';
import Logo from '../assets/images/12.svg';
import Pages from '../Routing/Pages.json';
import { Link, NavLink } from 'react-router-dom';
import banner from '../assets/images/ursbanner.svg';
//mainbanner.png
import mobilebanner from '../assets/images/mobilemainbanner.png';
import axios from 'axios';

export default function Navbar() {
  const url = 'https://api.ursdanismanlik.com/v1';

    const activeClassName = style.active;
    const navlinkClassName = style.link;

    let [showDropMenu, setShowDropMenu] = useState(false);
    let subMenu = [];

    const showMenu = useCallback((e) => {
        if (e.target.innerText == "Hizmet & Eğitim") {
            setShowDropMenu(true);
        }
    })
    const hideMenu = useCallback((e) => {
        setShowDropMenu(false);
    })
    const showMenuHover = useCallback(() => {
        setShowDropMenu(true);
    })

    const [dataServiceAndEDucation, setDataServiceAndEDucation] = useState([]);
    const getServiceAndEducationData = () => {
        axios
            .get(`${url}/services`)
            .then(response => setDataServiceAndEDucation(response.data.data))
            .catch(error => console.log(error));
    };
    useEffect(() => {
        getServiceAndEducationData();
    }, [])
    return (
        <div className={style.URShomeHead}>
            <div className="row">
                <div className={style.URSheader}>
                    <div className={style.URSmainBanner}>
                        <img className={style.URSmainBannerImg} src={banner} alt="Banner" />
                        <img className={style.URSmainMobileBannerImg} src={mobilebanner} alt="Mobile Banner" />
                        {/* <div className={style.URSmainBannerSLogans}>
                            <h2 className={style.firstSlogan}>e-ticaret danışmanlığı & eğitim</h2>
                            <h2 className={style.secondSlogan}>En doğru yatırım <br /> Kendine yaptığın yatırımdır!</h2>
                        </div> */}
                    </div>

                    <div className={style.URSheaderNavigation}>
                        <div className="row">
                            <div className={style.navigation}>
                                <div className="col-2">
                                    <div className={style.logo}><Link to={'/'}><img src={Logo} alt="Logo" id={style.logo} /></Link></div>
                                </div>

                                <div className="col-md-8">
                                    <nav>
                                        <ul className={style.navigationList}>
                                            <li className={style.navigationListItem}>
                                                <NavLink to={'/URSaboutPage'} className={({ isActive }) =>
                                                    isActive ? activeClassName : navlinkClassName
                                                }>Hakkımızda</NavLink>
                                            </li>
                                            <li className={style.navigationListItem}>
                                                <NavLink to="/URSserviceAndEducationDetail/:Online%20Arbitrage" onMouseEnter={showMenu} onMouseLeave={hideMenu} id={style.dropDownMenuLink} className={({ isActive }) =>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* .row */}
        </div>
    )
}




