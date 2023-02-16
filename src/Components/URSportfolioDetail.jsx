import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import { URSdataPortfolio } from '../Data/URSdataPortfolio';
import style from "../assets/css/URSportfolioDetail.module.css";
import { Link } from 'react-router-dom';
import URSapplyForm from './URSapplyForm';
import URSscrollHeader from './URSscrollHeader';
import BreadcumpStyle from '../assets/css/Breadcump.module.css';
import URSmobileHeader from '../Components/URSmobileHeader';
import URSfooter from '../Components/URSfooter';
import axios from 'axios';

export default function URSportfolioDetail() {
    window.scrollTo(0, 0);
    const detail = useParams();
    let filteredData = [];

    const url = 'https://api.ursdanismanlik.com/v1';

    const [URSdataPortfolio, setURSdataPortfolio] = useState([]);
    const getData = () => {
        axios.get(`${url}/portfolios`)
            .then(result => setURSdataPortfolio(result.data.data))
            .catch(error => console.log('error'))
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div className={style.URSportfolioDetail}>

            <div className={BreadcumpStyle.breadcump}>
                <Link to={'/'}>Ana sayfa</Link>/
                <Link to={'/URSportfolioPage'}>Portfolio</Link>/
                {
                    URSdataPortfolio.map(item => {
                        if (detail.detail.slice(1) == item.text) {
                            return <Link key={item.text} className={BreadcumpStyle.active}>{item.text}</Link>
                        }
                    })
                }
            </div>
            <URSmobileHeader />
            <URSscrollHeader />

            <div className={style.portfolioDetail}>
                <div className="container">
                    <div className="row">
                        {
                            URSdataPortfolio.map((item, index) => {
                                {
                                    if (detail.detail.slice(1) == item.marka) {
                                        return <div className="row" key={item.marka}>
                                            <div className="col-lg-6">
                                                <div className={style.PortfolioDetailImg}>
                                                    <img src={`https://api.ursdanismanlik.com/uploads/${item.picture}`} alt="portfolio" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className={style.titleAndDescription}>
                                                    <h2 className={style.title}>{item.marka}</h2>
                                                    <h2 className={style.titleServiceName}>{item.serviceName}</h2>
                                                    <p className={style.description}>
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    } else {
                                        filteredData.push(item)
                                    }
                                }
                            })

                        }

                        <div className={style.otherPortfolioExamples}>
                            <div className="col-12">
                                <div className="col-12">
                                    <div className={style.titles}>
                                        <h2 className={style.titleFiftyPixelLight}>diğer</h2>
                                        <h2 className={style.titleFiftyPixel}>portfolio</h2>
                                        <h2 className={style.titleFiftyPixelLight}>örneklerimiz</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={`row ${style.row}`}>
                                {
                                    filteredData.map((item, index) => {
                                        return <div className={`col-6 col-md-4 col-lg-3 ${style.filteredPortfolioDetail}`} key={index}>
                                            <NavLink to={`/URSportfolioPage/:${item.marka}`} >

                                                <div className={style.URSportfolioExample}>
                                                    <div className={style.example}>
                                                        <div className={style.examplePhoto}>
                                                            <img rc={`https://api.ursdanismanlik.com/uploads/${item.picture}`} className={style.image} alt="portfolio" />
                                                        </div>
                                                        <div className={style.brandAndService}>
                                                            <h3 className={style.brandAndServiceName}>
                                                                <span className={style.brandName}>{item.marka}</span> <span className={style.serviceName}> {item.serviceName}</span>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>

                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <URSapplyForm />
            <URSfooter />
        </div>
    )
}
