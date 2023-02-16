import React, { useState, useEffect } from 'react'
import style from '../assets/css/URSserviceAndEducation.module.css'
// import { dataServiceAndEDucation } from '../Data/URSdataServiceAndEducation';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default function Service() {
  const url = 'https://api.ursdanismanlik.com/v1';
  
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
    <div className={style.URSserviceAndEducation}>
      <div className="container">
        <div className="row">
          <div className={`${style.URSserviceAndEducationLeftSide} col-lg-6`}>
            <div className={style.titles}>
              <h2 className={style.titleFiftyPixel}>hizmet & eğitim</h2><br />
              <h3 className={style.titleFortyPixel}>alanları</h3>
            </div>
            <p className={style.shortDescription}>Amazon'da gerçek bir iş kurma hayalini gerçekleştirmek sandığın kadar zor değil. Yolculuk uzun, sonuçlar harika olacak!
            </p>
          </div>
          <div className={`${style.URSserviceAndEducationRightSide} col-lg-6`}>
            <div className={`${style.row} row`}>
              {
                dataServiceAndEDucation.map(data => {
                  return (
                    <NavLink className={`col-lg-6 col-md-12 ${style.serviceAndEducation}`} to={`/URSserviceAndEducationDetail/:${data.title}`} key={data.title}>

                      <img src={`https://api.ursdanismanlik.com/uploads/${data.picture2}`} className={style.icon} />
                      <img src={`https://api.ursdanismanlik.com/uploads/${data.picture3}`} className={style.lightIcon} />
                      <br />
                      <p className={style.title}>{data.title}</p><br /><br />
                      <small className={style.information}>{data.shortDescription}</small>
                    </NavLink>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
