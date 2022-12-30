// import { useEffect } from 'react';
import * as S from './styles';
import { useMoviesContext } from '../../Contexts/context';
import { useEffect, useState } from 'react';

export const Register = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLength, setErrorLength] = useState('');
  const [error, setError] = useState('');
  const [errorNameLength, setErrorNameLength] = useState('');
  const { movieAccount, logged, setMovieAccount, navigate } =
    useMoviesContext();

  useEffect(() => {
    document.title = 'Register';
    localStorage.setItem('movieAccount', JSON.stringify(movieAccount));
    localStorage.setItem('movieLogged', JSON.stringify(logged));
  }, [logged, movieAccount]);

  const saveUser = () => {
    const username = name.trim();
    const userEmail = email.trim();
    const userPassword = password.trim();
    const user = {
      name: username,
      email: userEmail,
      password: userPassword,
      userPhoto: '',
      moviesList: [],
      seriesList: [],
    };

    addUser(user);
  };

  const addUser = (user) => {
    const copyUser = [...movieAccount, user];
    setMovieAccount(copyUser);
  };

  const handleRegisterAccount = (e) => {
    e.preventDefault();
    let emailUser = [];

    if (movieAccount.length > 0) {
      movieAccount.forEach((el) => {
        emailUser.push(el.email);
      });
    }
    if (name.length < 3) {
      setErrorNameLength('error');
      return;
    } else if (emailUser.length > 0) {
      const filter = emailUser.filter((el) => {
        return el === email;
      });
      if (filter[0] === email) {
        setErrorNameLength('success');
        setError('error');
      } else if (password.length < 6) {
        setError('success');
        setErrorLength('error');
        return;
      } else {
        saveUser();
        navigate('/login');
      }
    } else {
      saveUser();
      navigate('/login');
    }
  };

  return (
    <S.FormBg>
      <S.Form onSubmit={(e) => handleRegisterAccount(e)}>
        <S.FormTitle>Create account</S.FormTitle>
        <S.FormDisplay>
          <S.FormName>
            <S.FormControl>
              <S.InputName
                error={errorNameLength}
                required={true}
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <S.LabelName
                className="label"
                name={name}
                id="name_label"
                htmlFor="name"
              >
                Name
              </S.LabelName>
              {errorNameLength === 'error' && (
                <S.Small error={errorNameLength}>
                  Need 3 or more letters.
                </S.Small>
              )}
              {errorNameLength === 'success' && (
                <S.Small error={errorNameLength}>Success</S.Small>
              )}
            </S.FormControl>
            <S.FormControl>
              <S.InputLast
                required={true}
                id="last"
                type="text"
                name="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <S.LabelLast lastName={lastName} className="label" htmlFor="last">
                Last Name
              </S.LabelLast>
            </S.FormControl>
          </S.FormName>
          <S.FormControl>
            <S.InputEmail
              error={error}
              required={true}
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.LabelEmail email={email} className="label" htmlFor="email">
              Email
            </S.LabelEmail>
            {error === 'error' && (
              <S.Small error={error}>This email already exists!</S.Small>
            )}
          </S.FormControl>
          <S.FormControl>
            <S.InputPassword
              error={errorLength}
              required={true}
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.LabelPassword
              password={password}
              className="label"
              htmlFor="password"
            >
              Password
            </S.LabelPassword>
            {errorLength === 'error' && (
              <S.Small error={errorLength}>Need 6 or more letters.</S.Small>
            )}
          </S.FormControl>
        </S.FormDisplay>
        <S.Button>Log In</S.Button>
      </S.Form>
    </S.FormBg>
  );
};
