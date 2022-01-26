import  { MdHomeFilled } from "react-icons/md";
import  { FiSend } from "react-icons/fi";
import  { CgAddR } from "react-icons/cg";
import  { MdOutlineExplore } from "react-icons/md";
import  { BiHeart } from "react-icons/bi";
import  { FiCircle } from "react-icons/fi";


const RightSectionHeader = () => {
  return <div className='instagram-icons' id='right-section-header'>
      <MdHomeFilled className='homefilled'/>
      <FiSend />
      <CgAddR />
      <MdOutlineExplore />
      <BiHeart />
      <FiCircle />

  </div>;
};

export default RightSectionHeader;
