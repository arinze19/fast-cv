import { useState } from 'react';
import { MainContextProvider } from './context/MainContextProvider';
import Header from './components/base/Header';
import Preview from './components/pages/Preview';
import Home from './components/pages/Home';

function App() {
  let [preview, setPreview] = useState(false);

  function togglePreview() {
    // set the preview mode to the opposite of what it was
    setPreview((prevState) => (preview = !prevState));
  }

  function currentPage() {
    if (preview) {
      return <Preview />;
    }
    
    return <Home togglePreview={togglePreview} />;
  }

  return (
    <MainContextProvider>
      <div>
        <Header togglePreview={togglePreview} preview={preview} />
        {currentPage()}
      </div>
    </MainContextProvider>
  );
}

export default App;
