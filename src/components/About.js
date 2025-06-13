import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: 'black',
        border: '1px solid white'
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      });
      setBtnText("Enable Dark Mode");
    }
  };

return (
  <div className="container" style={myStyle}>
    <h1 className="text-center my-2">About Us</h1>

    <div className="accordion" id="accordionExample">
      {/* Accordion Item 1: About the App */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={myStyle}
          >
            What is Text Converter?
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
          style={myStyle}
        >
          <div className="accordion-body">
            <strong>Welcome to Text Converter!</strong> This application is designed to make your text formatting easier and faster. Whether you want to convert text to uppercase, lowercase, title case, or remove extra spaces — we've got you covered!
            <br /><br />
            <strong>Key Features:</strong>
            <ul>
              <li>Convert text to UPPERCASE, lowercase, Capitalized Case, etc.</li>
              <li>Remove extra white spaces for clean formatting</li>
              <li>Instant character and word count</li>
              <li>Light and Dark Mode support for better readability</li>
            </ul>
            <strong>Why use this app?</strong> It's a simple, fast, and reliable tool for students, writers, developers, and anyone who works with text regularly.
            <br /><br />
            Thank you for using <strong>Text Converter</strong> — we hope it boosts your productivity!
          </div>
        </div>
      </div>

      {/* Accordion Item 2: How It Works */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={myStyle}
          >
            How does it work?
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
          style={myStyle}
        >
          <div className="accordion-body">
            Simply enter or paste your text into the editor, then click on the desired action button such as:
            <ul>
              <li><strong>Uppercase</strong>: Converts all letters to CAPITALS.</li>
              <li><strong>Lowercase</strong>: Converts all letters to lowercase.</li>
              <li><strong>Clear Text</strong>: Removes all text.</li>
              <li><strong>Remove Extra Spaces</strong>: Cleans up unnecessary spaces.</li>
            </ul>
            Changes are reflected instantly, helping you format your text within seconds.
          </div>
        </div>
      </div>

      {/* Accordion Item 3: Benefits */}
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={myStyle}
          >
            Who can benefit?
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
          style={myStyle}
        >
          <div className="accordion-body">
            <strong>Text Converter</strong> is useful for:
            <ul>
              <li><strong>Students</strong> — to prepare notes and assignments</li>
              <li><strong>Writers & Bloggers</strong> — to clean and format content</li>
              <li><strong>Developers</strong> — to manage text transformations</li>
              <li><strong>Content Creators</strong> — to save time in editing</li>
            </ul>
            This tool is designed to be lightweight, fast, and easy to use across all modern browsers.
          </div>
        </div>
      </div>
    </div>

    <div className="container my-3">
      <button onClick={toggleStyle} className="btn btn-primary">
        {btnText}
      </button>
    </div>
  </div>
);

}
