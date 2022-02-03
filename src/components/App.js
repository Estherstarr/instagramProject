import "../styles/App.scss"
import Header from "./Header";
import InstaStories from "./InstaStories";
import ContentSection from "./ContentSection";


function App() {
  return (
    <div className="App">
      <Header/>
      <InstaStories />
      <ContentSection /> 

    </div>
  );
}

export default App;
