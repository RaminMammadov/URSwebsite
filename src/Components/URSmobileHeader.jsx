import React, { useState,useEffect, useCallback } from 'react'
import style from '../assets/css/URSmobileHeader.module.css';
import Logo from '../assets/images/11.svg';
import { FaWhatsapp, FaPhone, FaBars, FaStaylinked } from 'react-icons/fa';
import Pages from '../Routing/Pages.json';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

export default function HeaderMenuMobile() {
  const url = 'https://api.ursdanismanlik.com/v1';

    const [showMenu, setShowMenu] = useState(false);
    const setMenu = useCallback(() => {
        setShowMenu(!showMenu);

    })

    let [showDropMenu, setShowDropMenu] = useState(false);
    const dropMenuToogle = () => {
        setShowDropMenu(!showDropMenu)
    }


    const [socialMediaLinks,setSocialMediaLinks] = useState([]);
    const getScoailLinksData = () => {
      axios.get(`${url}/socials`)
      .then(response => {
        setSocialMediaLinks(response.data.data)
      })
      .catch(error => console.log(error))
    }
    
    const [tools,setTools] = useState([]);
    const getTools = () => {
        axios.get(`${url}/communication`)
        .then(response => {
            setTools(response.data.data)
        })
        .catch(error => console.log(error))
      }
    useEffect(() => {
      getScoailLinksData();
      getTools();
      
    }, [])

    return (
        <div className={style.URSmobileHeader}>
            <div className="container">
                <div className={style.header}>
                    <div className={style.logo}><Link to={'/'}><img src={Logo} alt="Logo" id={style.logo} /></Link></div>
                    <div className={style.navigation}>
                        {
                            socialMediaLinks.map(data => {
                                if (data.name == 'WhatsApp') {
                                    return <a className={style.socialIcon} href={data.link} target={'_blank'}><FaWhatsapp /></a>
                                }
                            })
                        }
                        {
                            tools.map(data => {
                                return <a href={`tel:${data.telephone}`}><FaPhone /></a>
                            })
                        }
                
                        <FaBars className={style.bars} onClick={setMenu} />
                    </div>

                </div>
            </div>

            <div className={style.mobileMenu}>
                {
                    showMenu ? <ul className={style.mobileMenuList}>
                        <li className={style.mobileMenuListItem}>
                            <Link className={style.link} to="/URSaboutPage" onClick={setMenu}>Hakkımızda</Link>
                        </li>
                        <li className={style.mobileMenuListItem}>
                            <a className={style.link} href="#" onClick={dropMenuToogle}>Hizmet & Eğitim</a>
                            {
                                showDropMenu ? <ul className={style.servicesDropdown}>
                                    <li className={style.dropDownItem}>
                                        <Link onClick={setMenu} className={style.dropDownLink} to="/URSserviceAndEducationDetail/:Online%20Arbitrage">Online Arbitrage</Link>
                                    </li>
                                    <li className={style.dropDownItem}>
                                        <Link onClick={setMenu} className={style.dropDownLink} to="/URSserviceAndEducationDetail/:Retail%20Arbitrage">Retail Arbitrage</Link>
                                    </li>
                                    <li className={style.dropDownItem}>
                                        <Link onClick={setMenu} className={style.dropDownLink} to="/URSserviceAndEducationDetail/:Private%20Label">Private Label</Link>
                                    </li>
                                    <li className={style.dropDownItem}>
                                        <Link onClick={setMenu} className={style.dropDownLink} to="/URSserviceAndEducationDetail/:Teknik%20Servis">Teknik Destek</Link>
                                    </li>
                                </ul> : null
                            }

                        </li>
                        <li className={style.mobileMenuListItem}>
                            <Link className={style.link} onClick={setMenu} to="/URSportfolioPage">Portfolio</Link>
                        </li>
                        <li className={style.mobileMenuListItem}>
                            <Link className={style.link} onClick={setMenu} to="/URScontactPage">İletişim</Link>
                        </li>
                    </ul> : null
                }

            </div>
        </div>
    )
}

