import React from 'react';

export default function Form({ title, handleClick }) {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
}
