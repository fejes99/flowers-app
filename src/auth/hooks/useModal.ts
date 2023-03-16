import { useState, useCallback, useMemo } from 'react';

const useModal = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openProfileModal = useCallback(() => {
    setShowProfileModal(true);
    setShowLoginModal(false);
    setShowRegisterModal(false);
  }, []);

  const openLoginModal = useCallback(() => {
    setShowProfileModal(false);
    setShowLoginModal(true);
    setShowRegisterModal(false);
  }, []);

  const openRegisterModal = useCallback(() => {
    setShowProfileModal(false);
    setShowLoginModal(false);
    setShowRegisterModal(true);
  }, []);

  const closeAllModals = useCallback(() => {
    setShowProfileModal(false);
    setShowLoginModal(false);
    setShowRegisterModal(false);
  }, []);

  const modalState = useMemo(() => {
    return {
      showProfileModal,
      showLoginModal,
      showRegisterModal,
    };
  }, [showProfileModal, showLoginModal, showRegisterModal]);

  const modalFunctions = useMemo(() => {
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
