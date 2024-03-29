import { useState } from "react";
import Form from "./Form";
import Slider from "./Slider";

import "./App.css";

function App() {
  const images=[

  "https://picsum.photos/id/236/1000/500" ,
  "https://picsum.photos/id/237/1000/500" ,
  "https://picsum.photos/id/238/1000/500"  
    
]
  
  return (
    <>
      <Form></Form>
      <Slider data={images}></Slider>
    </>
  );
  }

export default App;
