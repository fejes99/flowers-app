import './LoginSuccessModal.css';

type Props = {
  show: boolean;
  onClose: () => void;
};

const LoginSuccessModal: React.FC<Props> = ({ show, onClose }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='login-success-modal' onClick={(event) => event.stopPropagation()}>
        <h2 className='login-success-modal-title'>
          Congratulations! You have successfully logged in!
        </h2>
        <div className='login-success-modal-row'>
          <button className='login-success-modal-submit-button'>Profile</button>
          <button className='login-success-modal-submit-button' onClick={onClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessModal;
