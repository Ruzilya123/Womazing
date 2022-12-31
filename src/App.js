import React, {Suspense} from "react";
import "./style.scss"
import Layout from "./Layout/Layout";


function App() {
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <Layout/>
      </div>
    </Suspense>
  );
}

export default App;
