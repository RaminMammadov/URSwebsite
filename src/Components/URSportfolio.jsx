import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import style from "../assets/css/URSportfolio.module.css"
// import { URSdataPortfolio } from '../Data/URSdataPortfolio';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';


export default function PortfolioComponent() {
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
    
    let element = {
        portfolioComponentContent: <div className={style.URSportfolio}>
            <div className="container">
                <div className="row">

                    {
                        URSdataPortfolio.map((content, index) => {
                            return (
                                <div className="col-6 col-md-4 col-lg-3" key={index}>
                                    <NavLink to={`/URSportfolioPage/:${content.marka}`} >

                                        <div className={style.URSportfolioExample}>
                                            <div className={style.example}>
                                                <div className={style.examplePhoto}>
                                                    <img src={`https://api.ursdanismanlik.com/uploads/${content.picture}`} className={style.image} alt="portfolio" />
                                                </div>
                                                <div className={style.brandAndService}>
                                                    <h3 className={style.brandAndServiceName}>
                                                        <span className={style.brandName}>{content.marka}</span><span className={style.serviceName}>{content.serviceName}</span>
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>

                                </div>
                            )
                        })

                    }
                </div>
            </div>
        </div>
    }
    return (
        <>
            {element.portfolioComponentContent}
        </>

    )
}
