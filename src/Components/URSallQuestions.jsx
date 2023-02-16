import React, { useState, useCallback, useEffect } from 'react'
import style from '../assets/css/URSfrequentlyAskedQuestionsAllQuestions.module.css';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
// import FaqQuestions from '../Data/URSfrequentlyAskedQuestions.json';
import axios from 'axios';

export default function URSallQuestions() {
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
    <div className={style.allQuestions}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={style.frequentlyAskedQuestionsAccordion}>
              {
                FaqQuestions.map((item, index) => {
                  return <div key={item._id}><div className={style.questions} onClick={showAnswer} data-key={item._id} >
                    <div className={style.question} data-key={item._id}>{item.question}</div>
                    <div className={style.questionArrowIcon}>{arrowIcon ? dataKey == item._id ? <FaArrowUp data-key={item._id} /> : <FaArrowDown data-key={item._id} /> : <FaArrowDown data-key={item._id} />}</div>
                  </div>
                    {isSowAnswer ? dataKey == item._id ? <div className={style.answers}> <div className={style.answer}>{item.answer}</div> </div> : null : null}</div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
