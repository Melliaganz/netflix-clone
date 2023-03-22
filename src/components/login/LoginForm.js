import React, { useState } from 'react';
import { firebaseAuth } from '../../firebase/firebase';


function LoginForm() {
  
  const [email, setEmail] = useState();
  const [password, SetPassword] = useState();
  
  const login = () => {
    firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      console.log('signed in user')
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  const onEmailChanged = (e) => {
    const updatedEmail = e.target.value;
    setEmail(() => updatedEmail);
  };
  
  const onPasswordChanged = (e) => {
    const updatedPassword = e.target.value;
    SetPassword(() => updatedPassword);
  };

  return (
    <div className="login-body">
      <div className="login-body__form">
        <h1>Se connecter</h1>
        <div className="login-body__input mb-16">
          <input type="text" placeholder="Email ou numéro de téléphone" onChange={onEmailChanged} />
        </div>
        <div className="login-body__input">
          <input type="password" placeholder="Mot de passe" onChange={onPasswordChanged} />
        </div>
        <button className="login-body__submit-btn" onClick={login}>Se connecter</button>
        <div className="login-body__options">
          <span>Se souvenir de moi</span>
          <span className="login-body__need-help">Besoin d'aide?</span>
        </div>
        <div className="login-body__footer">
          <div className="login-body__fb">
            <img src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" alt="fb" />
            <span>Se connecter avec Facebook</span>
          </div>
          <div className="login-body__new-to-nl">
            <span>Nouveau sur Netflix ?</span>
            <span className="login-body__sign-up"> S'enregistrer !</span>
          </div>
          <div className="login-body__google_captcha">
            Cette page est protégé par Google reCaptcha pour être sur que vous n'êtes pas un robot.
            <span className="login-body__learn-more"> En savoir plus.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm