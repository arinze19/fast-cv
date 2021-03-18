import { useState }   from "react";
import Header         from "./components/base/Header";
import Preview        from "./components/pages/Preview"
import Home           from "./components/pages/Home";

function App() {
  let [ preview, setPreview ] = useState(false)

  function togglePreview() {
    // set the preview to the opposite of what it was 
    setPreview(prevState => preview = !prevState)  
  }
  
  function currentPage() {
    if(preview) {
      return <Preview />
    }

    return <Home />;
  }

  return (
    <div>
      <Header togglePreview={togglePreview} preview={preview}/>
      {currentPage()}
    </div>
  )
}

export default App;
