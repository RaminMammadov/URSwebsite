import React, {useState, useEffect} from 'react';
import style from '../assets/css/URSyoutubeVideos.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const URSyoutubeVideos = () => {
    const url = 'https://api.ursdanismanlik.com/v1';

    const [videos,setVideos] = useState([]);
    const getVideos = () => {
        axios.get(`${url}/videos`)
        .then(response => setVideos(response.data.data))
        .catch(error => console.log(error))
    }       
    useEffect(() => {
        getVideos();
    },[])

    return (
        <div className={style.URSyoutubeVideos}>
            <section className={style.YoutubeVideos}>
                <div className="container">
                    <div className="row">
                        <div className={`col-md-12 text-center`}>
                            <div className={style.titles}>
                            <h2 className={style.titleFiftyPixel}>en son</h2>
                            <h3 className={style.titleFiftyPixelLight}>youtube videolarımız</h3>
                        </div>
                        </div>

                        <div className={style.latestVideos}>
                            <div className="row">
                               {
                                videos && videos.map((video,index) => {
                                    if (index <= 2) {
                                        return  <div className={`${style.ursYoutubeVideo} col-md-4 col-12`}>
                                        <div className={style.videoContent}>
                                            <iframe src={video.link} className={style.video} 
                                                title={video.videoTitle}
                                                frameborder="0" allowfullscreen>
                                            </iframe>
                                        </div>
                                        <h3 className={style.videoTitle}>{video.videoTitle}</h3>
                                        </div>
                                    }else {
                                        return null
                                    }
                                })
                               }

                                
                                <div className={style.seeAllVideosButton}>
                                   <NavLink className={style.seeAllVideosButtonLink} to={'/URSyoutubeVideosPage'}>Tüm videolarımızı izle</NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default URSyoutubeVideos;
