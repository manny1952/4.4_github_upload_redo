import React, { useState } from 'react';

function TextInput() {
  const [input, setInput] = useState('');

  return (
    <div>
      <h2>Text Input</h2>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <p>You typed: {input}</p>
    </div>
  );
}

export default TextInput;