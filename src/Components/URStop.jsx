import React, {useState,useEffect} from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaTelegram } from 'react-icons/fa';
import style from '../assets/css/URStop.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function HeaderMenu() {
    const url = 'https://api.ursdanismanlik.com/v1';

    const [socialMediaLinks, setSocialMediaLinks] = useState([]);
    const getScoailLinksData = () => {
        axios.get(`${url}/socials`)
            .then(response => {
                setSocialMediaLinks(response.data.data)
            })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        getScoailLinksData();

    }, [])
    return (
        <div className={style.URStop}>
            <div className="container">
                <div className="row">
                    <div className={style.URStopHeader}>
                        <div className="col-md-4 col-12">
                            <div className={style.location}><p className={style.adress}>URS E-ticaret Danışmanlığı - Hizmet & Eğitim</p></div>
                        </div>

                        <div className="col-md-4 text-center col-12">
                            <div className={style.socialMediaLinks}>
                                {
                                    socialMediaLinks.map(data => {
                                        if (data.name == 'Facebook') {
                                            return <a className={style.socialMediaLink} href={data.link} target={'_blank'}><FaFacebookF /></a>
                                        } else if (data.name == 'Youtube') {
                                            return <a className={style.socialMediaLink} href={data.link} target={'_blank'}><FaYoutube /></a>
                                        } else if (data.name == 'Instagram') {
                                            return <a className={style.socialMediaLink} href={data.link} target={'_blank'}><FaInstagram /></a>
                                        } else if (data.name == 'Tiktok') {
                                            return <a className={style.socialMediaLink} href={data.link} target={'_blank'}><FaTiktok /></a>
                                        } else if (data.name == 'Telegram') {
                                            return <a className={style.socialMediaLink} href={data.link} target={'_blank'}><FaTelegram /></a>
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className={style.applyButton} >
                                <a className={style.applyButtonLink} href='#ApplyForm'>Başvuru yap </a>
                            </div>
                        </div>
                    </div>
                </div>{/* .row */}
            </div>
            <Outlet />
        </div>
    )
}
