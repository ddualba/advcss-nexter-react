import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Realtors from './components/Realtors';
import FeatureList from './components/FeatureList';
import StoryPictures from './components/StoryPictures';
import StoryContent from './components/StoryContent';
import HomeList from './components/HomeList';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <FeatureList />
      <StoryPictures />
      <StoryContent />
      <HomeList />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
