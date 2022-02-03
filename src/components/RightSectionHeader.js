import  { MdHomeFilled } from "react-icons/md";
import  { FiSend } from "react-icons/fi";
import  { CgAddR } from "react-icons/cg";
import  { MdOutlineExplore } from "react-icons/md";
import  { BiHeart } from "react-icons/bi";



const RightSectionHeader = () => {
  return <div className='instagram-icons' id='right-section-header'>
      <MdHomeFilled className='icon'/>
      <FiSend className='icon'/>
      <CgAddR className='icon' />
      <MdOutlineExplore className='icon' />
      <BiHeart className='icon'/>
      { /* ProfilepicComponent*/ }

  </div>;
};

export default RightSectionHeader;
