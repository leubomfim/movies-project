// import { useEffect } from 'react';
import * as S from './styles';
import * as SR from '../Register/styles';
import { useMoviesContext } from '../../Contexts/context';
import { useEffect, useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { movieAccount, logged, navigate, setLogged } = useMoviesContext();

  useEffect(() => {
    if (Object.keys(logged).length > 0) {
      navigate('/');
    }
  }, [navigate, logged]);

  useEffect(() => {
    document.title = 'Login';
    localStorage.setItem('movieAccount', JSON.stringify(movieAccount));
    localStorage.setItem('movieLogged', JSON.stringify(logged));
  }, [logged, movieAccount]);

  const handleRegisterAccount = (e) => {
    e.preventDefault();
    if (password <= 5) {
      setError('error');
      return;
    } else if (movieAccount.length > 0) {
      const accountFilter = movieAccount.filter((ac) => {
        return ac.email === email;
      });
      if (accountFilter[0] === undefined) {
        setError('error');
      } else if (
        accountFilter[0].email === email &&
        accountFilter[0].password === password
      ) {
        setLogged(accountFilter[0]);
        navigate('/');
      } else {
        setError('error');
      }
    } else {
      setError('error');
    }
  };

  return (
    <SR.FormBg>
      <SR.Form onSubmit={(e) => handleRegisterAccount(e)}>
        {error === 'error' && (
          <S.Small error={error}>Email or password incorrect!</S.Small>
        )}
        <SR.FormTitle>Log In</SR.FormTitle>
        <SR.FormDisplay>
          <S.FormControl>
            <S.FormInput
              required={true}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SR.LabelEmail email={email} className="label" htmlFor="email">
              Email
            </SR.LabelEmail>
          </S.FormControl>
          <S.FormControl>
            <S.FormInput
              required={true}
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SR.LabelPassword
              password={password}
              className="label"
              htmlFor="password"
            >
              Password
            </SR.LabelPassword>
          </S.FormControl>
        </SR.FormDisplay>
        <SR.Button>Log In</SR.Button>
      </SR.Form>
    </SR.FormBg>
  );
};
