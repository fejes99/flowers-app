import { useState, useCallback, useMemo } from 'react';

type ModalStateType = {
  showProfileModal: boolean;
  showLoginModal: boolean;
  showRegisterModal: boolean;
};

type modalFunctionsType = {
  openProfileModal: () => void;
  openLoginModal: () => void;
  openRegisterModal: () => void;
  closeAllModals: () => void;
};

const useModal = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openProfileModal = useCallback((): void => {
    setShowProfileModal(true);
    setShowLoginModal(false);
    setShowRegisterModal(false);
  }, []);

  const openLoginModal = useCallback((): void => {
    setShowProfileModal(false);
    setShowLoginModal(true);
    setShowRegisterModal(false);
  }, []);

  const openRegisterModal = useCallback((): void => {
    setShowProfileModal(false);
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }, []);

  const closeAllModals = useCallback((): void => {
    setShowProfileModal(false);
    setShowLoginModal(false);
    setShowRegisterModal(false);
  }, []);

  const modalState = useMemo((): ModalStateType => {
    return {
      showProfileModal,
      showLoginModal,
      showRegisterModal,
    };
  }, [showProfileModal, showLoginModal, showRegisterModal]);

  const modalFunctions = useMemo((): modalFunctionsType => {
    return {
      openProfileModal,
      openLoginModal,
      openRegisterModal,
      closeAllModals,
    };
  }, [openProfileModal, openLoginModal, openRegisterModal, closeAllModals]);

  return { ...modalState, ...modalFunctions };
};

export default useModal;
