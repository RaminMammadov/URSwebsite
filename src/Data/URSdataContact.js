import {FaLocationArrow, FaEnvelopeOpen, FaPhone} from "react-icons/fa";
import style from '../assets/css/URScontactAndLocation.module.css';


const branchAzerbaijan = [
    {
        "id": 1,
        "class": style.blogIconFirst,
        "icon": <FaLocationArrow/>,
        "adress": "Mimar Sinan Mah Çolpan Sok Uzunlar İş Merkezi B Blok No:4 Da:6 Çekmeköy / İstanbul",
    },
    {
        "id": 2,
        "class": style.blogIconSecond,
        "icon": <FaPhone/>,
        "phoneNumber": "0532 731-9541",
    }, 
    {
        "id": 3,
        "class": style.blogIconLast,
        "icon": <FaEnvelopeOpen/>,
        "email": "info@ursdanismanlik.com",
    }

]

const branchTurkey = [

    {
        "id": 1,
        "class": style.blogIconFirst,
        "icon": <FaLocationArrow/>,
        "adress": "Sübhi Salayev sokağı, bina 37A, Nizami metrosu yakınlığı / Bakü",
    },
    {
        "id": 2,
        "class": style.blogIconSecond,
        "icon": <FaPhone/>,
        "phoneNumber": "050 445-1441",
    }, 
    {
        "id": 3,
        "class": style.blogIconLast,
        "icon": <FaEnvelopeOpen/>,
        "email": "info@foundin.az",
    }

]

export {branchAzerbaijan, branchTurkey};