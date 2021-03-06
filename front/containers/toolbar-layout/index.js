import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Toolbar from '../../components/Toolbar';
import Keypad from '../../components/Keypad';
import Button from '../../components/Button';

const ToolbarLayout = ({ isLogged }) => {
  const router = useRouter();

  const goToHome = () => {
    router.push(`/`);
  };

  const goToLogIn = () => {
    router.push(`/auth/login`);
  };

  const goMyCourses = () => {
    router.push(`/mis-cursos`);
  };

  return (
    <Toolbar
      goToHome={goToHome}
      right={
        <Keypad>
          <Button text="HOME" onClick={goToHome} />
          {!isLogged && <Button text="INICIAR SESIÓN" onClick={goToLogIn} />}
          {isLogged && <Button text="MIS CURSOS" onClick={goMyCourses} />}
          <Button
            leftIcon={
              <svg
                className="h-6 md:h-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </Keypad>
      }
    />
  );
};
ToolbarLayout.defaultProps = {
  isLogged: false,
};

ToolbarLayout.propTypes = {
  isLogged: PropTypes.bool,
};

export default ToolbarLayout;
