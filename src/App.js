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
      <Sidebar /> {/* [ wip ] */}
      <Header />
      <Realtors />
      <FeatureList /> {/* [x] */}
      <StoryPictures /> {/* [x] */}
      <StoryContent /> {/* [x] */}
      <HomeList /> {/* [x] */}
      <Gallery /> {/* [x] */}
      <Footer /> {/* [x] */}
    </div>
  );
}

export default App;
