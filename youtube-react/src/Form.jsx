import React from "react";
import "./Form.css";

function Form(props) {
  const addVideo = () => {
    const urlInput = document.getElementById("input").value;
    if (urlInput) {
      const url = "https://www.youtube.com/embed/" + urlInput;
      const card = document.createElement("text");
      const iframe = document.createElement("iframe");

      iframe.setAttribute("title", "Youtube Videos");
      iframe.setAttribute("width", 290);
      iframe.setAttribute("height", 300);
      iframe.setAttribute("src", url);
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      const container = document.getElementById("videoContainer");
      container.appendChild(iframe);
    }
  };
  return (
    <div className="page">
      <h1>Make Your Own Yotube Page</h1>
      <label1 htmlFor="url">Enter Url</label1>
      <br></br>
      <input
        type="text"
        id="input"
        placeholder="www.youtube.com"
        required
      ></input>
      <br></br>

      <button type="submit" onClick={addVideo}>
        Submit
      </button>
      <div>
        <div id="videoContainer"></div>
      </div>
    </div>
  );
}

export default Form;
