import './RegisterSuccessModal.css';

type Props = {
  show: boolean;
  onClose: () => void;
};

const RegisterSuccessModal: React.FC<Props> = ({ show, onClose }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className='register-success-modal' onClick={(event) => event.stopPropagation()}>
        <h2 className='register-success-modal-title'>
          Congratulations! You have successfully signed up!
        </h2>
        <button className='register-success-modal-submit-button' type='submit'>
          Ok
        </button>
      </div>
    </div>
  );
};

export default RegisterSuccessModal;
