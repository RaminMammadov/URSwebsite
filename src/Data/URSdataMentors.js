import {FaBehance, FaInstagram, FaLinkedin} from "react-icons/fa";
import img1 from '../assets/images/image1.jpeg';
import img2 from '../assets/images/image2.jpeg';
import img3 from '../assets/images/image3.jpeg';
import img4 from '../assets/images/image4.jpeg';
import style from "../assets/css/URSmentors.module.css";


const mentor = [
    {
        "id": 1,
        "class": style.card_back1,
        "name": "Fidan Şirvanlı",
        "profession": "Dizayn",
        "image": img1,
        "icon1": <FaLinkedin/>,
        "icon2": <FaBehance/>,
        "icon3": <FaInstagram/>,
        "href": "https://www.linkedin.com/"
    },
    {
        "id": 2,
        "class": style.card_back2,
        "name": "Cəfər Mehtiyev ",
        "profession": "Proqramlaşdırma",
        "image": img2,
        "icon1": <FaLinkedin/>,
        "icon2": <FaBehance/>,
        "icon3": <FaInstagram/>,
        "href": "https://www.linkedin.com/"
    },
    {
        "id": 3,
        "class": style.card_back3,
        "name": "Asiman İsmayilova",
        "profession": "Digital Marketinq digital digital digital",
        "image": img3,
        "icon1": <FaLinkedin/>,
        "icon2": <FaBehance/>,
        "icon3": <FaInstagram/>,
        "href": "https://www.linkedin.com/"
    },
    {
        "id": 4,
        "class": style.card_back4,
        "name": "Fərid İmanzadə ",
        "profession": "IT və Kiber Təhlükəsizlik",
        "image": img4,
        "icon1": <FaLinkedin/>,
        "icon2": <FaBehance/>,
        "icon3": <FaInstagram/>,
        "href": "https://www.linkedin.com/"
    }
]

export {mentor};