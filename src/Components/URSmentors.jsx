import React, { useState, useEffect } from "react";
import style from "../assets/css/URSmentors.module.css";
// import { mentor } from "../Data/URSdataMentors";
import axios from "axios";


function URSmentors() {
  const url = 'https://api.ursdanismanlik.com/v1';
  
  const [mentor, setMentor] = useState([]);
  const getMentorsData = () => {
    axios.get(`${url}/mentors`).then(response => setMentor(response.data.data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    getMentorsData();
  }, [])
  return (
    <div className={style.URSmentors} id="URSmentors">
      <div className="container">
        <div className={style.URSmentorsTitle}>
          <h2 className={style.URSmentorsTitleFiftyPixel}>eğitim</h2>
          <h2 className={style.URSmentorsTitleFiftyPixelLight}>mentörlerimiz</h2>
        </div>
        <div className={style.URSmentorsContent}>
          <div className="row">
            {mentor.map((result, index) => {
              return (
                <div className={`col-lg-3 col-6 ${style.URSmentorsItem}`} key={index}>
                  <div className={style.URSmentorsColDirection}>
                    <div className={style.URSmentorsCard}>
                      <div className={style.URSmentorsCardInner}>
                        <div className={style.URSmentorsCardFront}>
                          <img className={style.image} src={`${url}/uploads/${result.picture}`} alt="" />
                        </div>
                        <div className={`${style.URSmentorsCardBack} ${result.class}`}>
                          <img className={style.URSmentorsImage} src={`${url}uploads/${result.picture}`} alt="" />
                          <div className={style.URSmentorsTurnCard}>
                            <h4 className={style.name}>{result.name}<br />{result.surName}</h4>
                            <p className={style.profession}>
                              {result.serviceType}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default URSmentors;
