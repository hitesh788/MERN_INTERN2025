import About from "../About";
import {Suspense} from "react";
const LazyLoadingSuspense = () => {
    return (
     <div>
        <Suspense fallback={<h1>Loading with...</h1>}></Suspense>
      <h2>This is lazyLoading Componet with Suspense</h2>
      <About/>
     </div>
    );
  }
  export default LazyLoadingSuspense;