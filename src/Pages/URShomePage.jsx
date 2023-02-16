import React from 'react'
import URSheader from '../Components/URSheader';
import URSfrequentlyAskedQuestions from '../Components/URSfrequentlyAskedQuestions';
import URSserviceAndEducation from '../Components/URSserviceAndEducation';
import URSapplyForm from '../Components/URSapplyForm';
import URSyoutubeVideos from '../Components/URSyoutubeVideos';
import URSserviceAndEducationCountries from '../Components/URSserviceAndEducationCountries';
import URSfooter from '../Components/URSfooter';
import URSmentors from '../Components/URSmentors';


export default function URShomePage() {
  window.scrollTo(0,0);  
  return (
    <>
    <h1>Helloooooooo</h1>
      <URSheader />
      <URSserviceAndEducation />
      <URSserviceAndEducationCountries />
      <URSfrequentlyAskedQuestions />
      <URSyoutubeVideos />
      <URSmentors />
      <URSapplyForm />
      <URSfooter />
    </>
  )
}
