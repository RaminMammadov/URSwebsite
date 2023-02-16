import React, { useState, useEffect } from "react";
import style from "../assets/css/URScontactAndLocation.module.css";
import axios from "axios";
import { branchAzerbaijan } from '../Data/URSdataContact'

function Contact() {
  const url = 'https://api.ursdanismanlik.com/v1';
  
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(`${url}/offices`)
      .then(result => setData(result.data.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={style.URScontactAndLocation}>
      <div className="container">
        {
          data.map(result => {
            return (
              <div className="row" key={result._id}>
                <div className="col-lg-5 col-md-12">
                  <div className={style.URScontactMarginThirteenPixel}>
                    <div className={style.URScontactGetInTouch}>
                      <div className={style.URScontactGetInTouchTitle}>
                        <h4 className={style.officeName}>{result.name}</h4>
                      </div>
                      <div className={style.getInTouchBlog}>
                        <ul className={style.getInTouchBlogAbout}>
                          <li className={style.blogList} key={result._id}>
                            <div className={`${style.blogIcon} ${result.class}`}>
                            <FaEnvelopeOpen/>
                            <FaPhone/>
                            <FaLocationArrow/>
                            </div>
                            <div className={style.blogData}>
                              <span><a href={item.locationOnMap} target={'_blank'}>{result.adress}</a></span>
                              <span>{result.email}</span> <br />
                              <span>{result.telephone}</span> <br />
                              <span>{result.address}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12">
                  <div className={style.URScontactMarginThirteenPixel}>
                    <div className={style.URScontactMapLocation}>
                      <iframe className={style.map} src={item.locationOnMap}></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Contact;
