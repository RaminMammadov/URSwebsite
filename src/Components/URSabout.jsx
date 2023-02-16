import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from "../assets/css/URSabout.module.css";
import about from "../assets/images/about.jpg";
// import { URSdataAbout } from '../Data/URSdataAbout';
import axios from 'axios';

const URSabout = () => {
    const [URSdataAbout, setURSdataAbout] = useState([]);
    const url = 'https://api.ursdanismanlik.com/v1';

    const getData = () => {
        axios.get(`${url}/about`)
            .then(response => setURSdataAbout(response.data.data))
            .catch(error => console.log(error));
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={style.URSabout}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className={style.leftSide}>
                            {URSdataAbout.map(result => <h1 className={style.title}>{result.title}</h1>)}
                            <div className={style.leftSideInformation}>
                                <div className={style.icons}>
                                    <ul className={style.list}>
                                        {
                                            URSdataAbout.map(result => {
                                                return (
                                                    <li key={result._id} className={style.listItem}>
                                                        <div className={style.descriptions}>
                                                            <p className={style.description}>{result.description}</p>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>
                            <div className={style.goToPortfolioButton}>
                                <NavLink to={'/URSportfolioPage'} className={style.goToPortfolioButtonLink}>Portfolioya git</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className={style.rightSide}>
                            {
                                URSdataAbout.map(result => <img key={result._id} src={`https://api.ursdanismanlik.com/uploads/${result.picture}`} alt="" className={style.rightSideImage} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default URSabout;