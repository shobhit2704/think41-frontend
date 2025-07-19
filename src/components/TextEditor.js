import React, { useState, useRef } from "react";
import "./TextEditor.css";

const TextEditor = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const lineNumbersRef = useRef(null);

  const handleScroll = () => {
    lineNumbersRef.current.scrollTop = textareaRef.current.scrollTop;
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleFileLoad = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "text/plain") {
      const reader = new FileReader();
      reader.onload = (event) => {
        setText(event.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a valid .txt file");
    }
  };

  const lineCount = text.split("\n").length;
  const lineNumbers = Array.from({ length: lineCount }, (_, i) => i + 1);

  return (
    <div style={{ padding: "20px" }}>
      {/* File Upload */}
      <input
        type="file"
        accept=".txt"
        onChange={handleFileLoad}
        style={{ marginBottom: "10px" }}
      />

      {/* Text Editor Container */}
      <div className="editor-container">
        {/* Line Numbers */}
        <div className="line-numbers" ref={lineNumbersRef}>
          {lineNumbers.map((lineNumber) => (
            <div key={lineNumber}>{lineNumber}</div>
          ))}
        </div>

        {/* Text Area */}
        <textarea
          ref={textareaRef}
          className="text-area"
          value={text}
          onChange={handleChange}
          onScroll={handleScroll}
          placeholder="Start typing or upload a .txt file..."
        />
      </div>
    </div>
  );
};

export default TextEditor;
