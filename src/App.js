import React, { useEffect, useState } from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import VideoBackground from './VideoBackground';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
       <VideoBackground />
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Content of the first div */}
        <Home />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: scrollPosition > 0 ? 1 : 0 }}>
        {/* Content of the second div */}
        <About />
      </div>
      {/* <div style={{display: 'flex'}}> */}
      <Experience />
      {/* </div> */}
    </div>
  );
};

export default App;
