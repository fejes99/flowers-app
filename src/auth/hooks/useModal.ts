import { useState, useCallback, useMemo } from 'react';

type ModalStateType = {
  showProfileModal: boolean;
  showLoginModal: boolean;
  showLoginSuccessModal: boolean;
  showRegisterModal: boolean;
  showRegisterSuccessModal: boolean;
};

type modalFunctionsType = {
  openProfileModal: () => void;
  openLoginModal: () => void;
  openLoginSuccessModal: () => void;
  openRegisterModal: () => void;
  openRegisterSuccessModal: () => void;
  closeAllModals: () => void;
};

const useModal = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginSuccessModal, setShowLoginSuccessModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showRegisterSuccessModal, setShowRegisterSuccessModal] = useState(false);

  const closeAllModals = useCallback((): void => {
    setShowProfileModal(false);
    setShowLoginModal(false);
    setShowLoginSuccessModal(false);
    setShowRegisterModal(false);
    setShowRegisterSuccessModal(false);
  }, []);

  const openProfileModal = useCallback((): void => {
    closeAllModals();
    setShowProfileModal(true);
  }, [closeAllModals]);

  const openLoginModal = useCallback((): void => {
    closeAllModals();
    setShowLoginModal(true);
  }, [closeAllModals]);

  const openLoginSuccessModal = useCallback((): void => {
    setShowLoginModal(false);
    setShowLoginSuccessModal(true);
  }, []);

  const openRegisterModal = useCallback((): void => {
    closeAllModals();
    setShowRegisterModal(true);
  }, [closeAllModals]);

  const openRegisterSuccessModal = useCallback((): void => {
    setShowRegisterModal(false);
    setShowRegisterSuccessModal(true);
  }, []);

  const modalState = useMemo((): ModalStateType => {
    return {
      showProfileModal,
      showLoginModal,
      showLoginSuccessModal,
      showRegisterModal,
      showRegisterSuccessModal,
    };
  }, [
    showProfileModal,
    showLoginModal,
    showLoginSuccessModal,
    showRegisterModal,
    showRegisterSuccessModal,
  ]);

  const modalFunctions = useMemo((): modalFunctionsType => {
    return {
      openProfileModal,
      openLoginModal,
      openLoginSuccessModal,
      openRegisterModal,
      openRegisterSuccessModal,
      closeAllModals,
    };
  }, [
    openProfileModal,
    openLoginModal,
    openLoginSuccessModal,
    openRegisterModal,
    openRegisterSuccessModal,
    closeAllModals,
  ]);

  return { ...modalState, ...modalFunctions };
};

export default useModal;
