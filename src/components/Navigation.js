import "../styles/navigation.scss";
import logo from"../images/instagramlogo.png";
import searchIcon from"../images/searchicon.png";
import RightSectionNav from "./RightSectionNav";


const Navigation = () => {
  return <div className="navigation">
      <div className="container">
          <img className="logo" src ={logo} alt= "instagram-logo"/>

          <div className="search">
              
              <img className="searchIcon" src={searchIcon} alt="search icon" />
              <span className="searchText">Search</span>
          </div>
          <RightSectionNav />
      </div>
  </div>;
};

export default Navigation;
