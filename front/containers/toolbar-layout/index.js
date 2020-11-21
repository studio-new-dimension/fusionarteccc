import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Toolbar from '../../components/Toolbar';
import Keypad from '../../components/Keypad';
import Button from '../../components/Button';
import ModalComponent from '../../components/Modal';

const ToolbarLayout = () => {
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const goToHome = () => {
    router.push(`/`);
  };
  const goToLogIn = () => {
    router.push(`/auth/login`);
  };
  const openModal = () => {
    console.log(modalIsOpen);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    console.log(modalIsOpen);
  };
  return (
    <Toolbar
      goToHome={goToHome}
      right={
        <Keypad>
          <Button text="HOME" onClick={goToHome} />
          <Button text="INICIAR SESIÓN" onClick={goToLogIn} />
          <Button
            onClick={openModal}
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
          <ModalComponent isOpen={modalIsOpen} closeModal={closeModal} />
        </Keypad>
      }
    />
  );
};

export default ToolbarLayout;
