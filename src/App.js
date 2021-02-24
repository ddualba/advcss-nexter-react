import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Realtors from './components/Realtors';
import Features from './components/Features';
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
      <Features />
      <StoryPictures />
      <StoryContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
