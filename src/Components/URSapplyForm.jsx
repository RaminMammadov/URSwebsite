import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import style from "../assets/css/URSapplyForm.module.css"
import axios from 'axios';

export default function Application() {
  const url = 'https://api.ursdanismanlik.com/v1';

    const [dataServiceAndEDucation, setDataServiceAndEDucation] = useState([]);
    const getServiceAndEducationData = () => {
        axios
            .get(`${url}/services`)
            .then(response => setDataServiceAndEDucation(response.data.data))
            .catch(error => console.log(error));
    };
    useEffect(() => {
        getServiceAndEducationData();
    }, [])
    return (
        <div className={style.URSapplyForm} id={'ApplyForm'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 ">
                            <div className={style.titles}>
                                <h2 className={style.titleFiftyPixell}>detaylı bilgi için</h2>
                                <h2 className={style.titleFourtyPixell}>bizimle <br /> iletişime geç!</h2>
                            </div>
                            <div className={style.descriptions}>
                                <p className={style.shortDescription}>Bilgi almak istediğin konuyu seçerek bize gönder, profesyönel ekip arkadaşlarımız seni arayarak tüm sorularını cevaplasın</p>
                            </div>
                        </div>
                        <div className={`col-md-6 col-12  ${style.applyForm}`}>
                            <div className={style.inputGroup}>
                                <div className={style.nameInput}>
                                    <input type="text"  placeholder='Ad' />
                                </div>
                                <div className={style.surNameInput}>
                                    <input type="text"  placeholder='Soyad' />
                                </div>
                            </div>

                            <div className={style.inputGroup}>
                                <div className={style.countryCodeInput}>
                                    <input type="text" placeholder='Ülke kodu' />
                                </div>
                                <div className={style.numberInput}>
                                    <input type="text" placeholder='Numara'/>
                                </div>
                            </div>

                            <div className={style.serviceSelect}>
                                <select className={style.select}>

                                    {
                                        dataServiceAndEDucation.map(data => {
                                            return <option value={data.title}>{data.title}</option>
                                        })
                                    }
                                </select>
                            </div>
                           <div className={style.applyFormButton}>
                               <button type='submit' className={style.applyFormButtonLink}>
                                    Başvuru yap
                               </button>
                           </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
