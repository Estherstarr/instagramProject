import "../styles/RightSectionNav.scss"
import  { MdHomeFilled } from "react-icons/md";
import  { FiSend } from "react-icons/fi";
import  { CgAddR } from "react-icons/cg";
import  { MdOutlineExplore } from "react-icons/md";
import  { BiHeart } from "react-icons/bi";

import ProfileIcon from "./ProfileIcon"


const RightSectionNav = () => {
  return <div className='instagram-icons' id='rightSectionNav'>
      <MdHomeFilled className='icon'/>
      <FiSend className='icon'/>
      <CgAddR className='icon' />
      <MdOutlineExplore className='icon' />
      <BiHeart className='icon'/>
      <ProfileIcon iconSize ="small" />


  </div>;
};

export default RightSectionNav;
