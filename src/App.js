import React from 'react';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center", margin: "20px 0" }}>
        📄 Text Editor with Line Numbers & File Upload
      </h2>
      <TextEditor />
    </div>
  );
}

export default App;
