import { icons } from "lucide-react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:'https://github.com/cvlln1'},
    {icon: <FaLinkedin />, path:'https://www.linkedin.com/in/yuricavallini/'},
    {icon: <FaInstagram />, path:'https://www.instagram.com/cavallini_yur1/'},

];

const Socials = ({ containerStyles, iconStyles }) => {
  return (

    <div className={containerStyles}>
        {socials.map((social, index) => {
            return(
                <Link  target="_blank" href={social.path} key={index} className={iconStyles}> 
                {social.icon}
                 </Link>
            );
        })} 
    </div>
    );
};

export default Socials