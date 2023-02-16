import URSaboutPage from "../Pages/URSaboutPage";
import URScontactPage from "../Pages/URScontactPage";
import URSportfolioPage from '../Pages/URSportfolioPage';
import URShomePage from "../Pages/URShomePage";
import URSportfolioDetail from "../Components/URSportfolioDetail";
import URSserviceAndEducationDetail from "../Components/URSserviceAndEducationDetail";
import URSfrequentlyAskedQuestionsPage from "../Pages/URSfrequentlyAskedQuestionsPage";
import URSyoutubeVideosPage from '../Pages/URSyoutubeVideosPage';

function routing(path,component) {
    return {
        path,
        component
    }
}

const navRoutes = {
    home:routing('/',<URShomePage />),
    about:routing('/URSaboutPage',<URSaboutPage/>),
    contact:routing('/URScontactPage',<URScontactPage/>),
    portfolio:routing('/URSportfolioPage',<URSportfolioPage/>),
    portfolioDetail:routing('/URSportfolioPage/:detail',<URSportfolioDetail />),
    serviceDetail:routing('/URSserviceAndEducationDetail/:detail',<URSserviceAndEducationDetail />),
    frequentlyAskedQuestionsPage:routing('/frequentlyAskedQuestionsPage',<URSfrequentlyAskedQuestionsPage />),
    allYoutubeVideos:routing('/URSyoutubeVideosPage',<URSyoutubeVideosPage />)
}
const routArr = Object.values(navRoutes);
export {routArr};