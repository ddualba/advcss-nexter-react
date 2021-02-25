import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Realtors from './components/Realtors';
import FeatureList from './components/FeatureList';
import StoryPictures from './components/StoryPictures';
import StoryContent from './components/StoryContent';
import Homes from './components/Homes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <FeatureList /> {/* [x] */}
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
