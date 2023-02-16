import React, { useState, useCallback, useEffect } from "react";
import style from "../assets/css/URSfrequentlyAskedQuestions.module.css";
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';
// import FaqQuestions from '../Data/URSfrequentlyAskedQuestions.json';
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Faq() {
    const [arrowIcon, setArrowIcon] = useState(false);
    const [isSowAnswer, setIsSowAnswer] = useState(false);
    const [dataKey, setDataKey] = useState();

    const showAnswer = useCallback((e) => {
        arrowIcon ? setArrowIcon(false) : setArrowIcon(true);
        isSowAnswer ? setIsSowAnswer(false) : setIsSowAnswer(true);
        setDataKey(e.target.dataset.key);
        if (e.target.dataset.key != dataKey) {
            setIsSowAnswer(true)
        }
    })


    //get data
    const url = 'https://api.ursdanismanlik.com/v1';
    
    const [FaqQuestions, setFaqQuestions] = useState([]);
    const getFAQData = () => {
        axios.get(`${url}/faqs`)
            .then(response => setFaqQuestions(response.data.data))
            .catch(error => console.log(error));

    }
    useEffect(() => {
        getFAQData();
    }, [])
    return (
        <>
            <div className={style.frequentlyAskedQuestions}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className={style.titles}>
                                <h2 className={style.titleFiftyPixel}>??? bize</h2><br />
                                <h3 className={style.titleFortyPixel}>sıkca sorulan sorular</h3>
                            </div>
                            <p className={style.shortDescription}>
                                Amazon'da alım satım yapmak ve bu işe nasıl başlayacağımız hakkında en sık sorulan soruları sizin için bir araya getirdik
                            </p>
                            <div className={style.seeAllQuestions}><NavLink to={'/frequentlyAskedQuestionsPage'} className={style.seeAllQuestionsBtn}>Tüm soruları gör</NavLink></div>
                        </div>

                        <div className="col-md-6 col-12">
                            <div className={style.frequentlyAskedQuestionsAccordion}>
                                {

                                    FaqQuestions.map(item => {
                                        return <div key={item._id}><div className={style.questions} onClick={showAnswer} data-key={item._id} >
                                            <div className={style.question} data-key={item._id}>{item.question}</div>
                                            <div className={style.questionArrowIcon}>{arrowIcon ? dataKey == item._id ? <FaArrowUp data-key={item._id} /> : <FaArrowDown data-key={item._id} /> : <FaArrowDown data-key={item._id} />}</div>
                                        </div>
                                            {isSowAnswer ? dataKey == item._id ? <div className={style.answers}> <div className={style.answer}>{item.answer}</div> </div> : null : null}</div>
                                    })
                                }

                            </div>
                            <div className={style.seeAllQuestions}><NavLink to={'/frequentlyAskedQuestionsPage'} className={style.seeAllQuestionsBtnMobile}>Tüm soruları gör</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}



