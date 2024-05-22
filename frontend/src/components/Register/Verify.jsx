import { useState } from 'react';

function Verify() {
  const [code, setCode] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }
  
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </form>
  );
}

export default Verify;
