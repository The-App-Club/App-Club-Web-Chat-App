import { useState } from 'react';

import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const uuid = Math.ceil(Math.random() * 10000);
    const userInfo = {
      name,
      email,
      description,
      id: uuid,
      role: 'Member',
      photoUrl: 'https://media0.giphy.com/media/gdMThHahEIUhR3Dapz/giphy.webp',
    };

    window.localStorage.setItem('currentTalkjsUser', JSON.stringify(userInfo));
    history.push('/mynetwork');
  }

  function handleChange(e, inputName) {
    switch (inputName) {
      case 'name':
        setName(e.target.value);

        break;

      case 'email':
        setEmail(e.target.value);

        break;

      case 'description':
        setDescription(e.target.value);

        break;

      default:
        break;
    }
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              handleChange(e, 'name');
            }}
            placeholder="Name"
            className="input"
            required
          />
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e, 'email');
            }}
            placeholder="Email"
            className="input"
            required
          />
          <textarea
            type="text"
            name="description"
            onChange={(e) => {
              handleChange(e, 'description');
            }}
            placeholder="Short Description"
            className="input textarea"
          ></textarea>
          <input type="submit" className="button" placeholder="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
