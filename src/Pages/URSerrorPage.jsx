import React from "react";
import style from "../assets/css/URSerrorPage.module.css";
import { NavLink } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
    return (
        <div className={style.URSerrorPage}>
            <div className={style.errorPage}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className={style.errorPageAlertIcon}>
                            
                            <FaExclamationTriangle />
                            </div>
                            <div className={style.errorPageAlert}>
                            404
                        </div>
                        <div className={style.errorPageTitle}>
                            Böyle bir sayfa bulunamadı...
                        </div>
                        <div className={style.errorPageDescription}>
                              Ana sayfamıza gidin ve yeni bir arama yapmayı deneyin
                        </div>
                        <div className={style.backToHomePage}>
                            <NavLink to="/" className={style.backToHomePageBtn}>Ana sayfaya geri dön</NavLink>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}