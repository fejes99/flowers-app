import React, { useState } from 'react';
import './Profile.css';
import LoginModal from './LoginModal/LoginModal';
import RegisterModal from './RegisterModal/RegisterModal';
import ProfileModal from './ProfileModal/ProfileModal';

const Profile: React.FC = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <RegisterModal onClose={() => setShow(false)} show={show} />
      <LoginModal onClose={() => setShow(false)} show={show} />
      <ProfileModal onClose={() => setShow(false)} show={show} />
    </div>
  );
};

export default Profile;
