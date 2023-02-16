import React, {useState,useEffect} from 'react';
import style from "../assets/css/URSserviceAndEducationCountries.module.css";
import axios from 'axios';

const Countries = () => {
    const url = 'https://api.ursdanismanlik.com/v1';
    
    const [countries,setCountries] = useState([]);
        const getPostsData = () => {
          axios
            .get(`${url}/countries`)
            .then(response => setCountries(response.data.data))
            .catch(error => console.log(error));
        };
        useEffect(() => {
          getPostsData();
        },[])
    return (
        <div className={style.URSserviceAndEducationCountries}>
            <div className="container">
                <div className={style.URSserviceAndEducationCountriesTitles}>
                    <div className={style.URSheaderServiceAndEducationCountries}>
                        <div className={style.titles}>
                            <h2 className={style.titleFiftyPixel}>Hizmet & eğitim</h2>
                            <h2 className={style.titleFiftyPixelLight}>verdiğimiz ülkeler</h2>
                        </div>
                    </div>
                </div>
               <div className={style.URSserviceAndEducationCountriesContent}>
               <div className="row">
                    {
                        countries.map(country => {
                            return (
                                <div className={`col-lg-2 col-6 ${style.URSserviceAndEducationCountriesItem}`} key={country.countryName}>
                                    <div className={style.URScountryServiceAndEducationCountries}>
                                        <img src={`https://api.ursdanismanlik.com/uploads/${country.picture}`} alt="" className={style.URScountryServiceAndEducationCountriesPhoto}/>
                                        <p className={style.countryName}>{country.countryName}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
               </div>
            </div>
        </div>
    )
}

export default Countries
