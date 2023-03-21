import { connect } from 'react-redux';
import Loader from '../../../../common/components/Loader/Loader';
import { StoreState } from '../../../../store/store';
import './RegisterSuccessModal.css';

type Props = {
  show: boolean;
  loading: boolean;
  error: any;
  onClose: () => void;
  onSuccess: () => void;
};

const RegisterSuccessModal: React.FC<Props> = ({ show, loading, error, onClose, onSuccess }) => {
  let renderModal = (
    <>
      <h2 className='register-success-modal-title'>
        Congratulations! You have successfully signed up!
      </h2>
      <button className='register-success-modal-submit-button' onClick={onSuccess}>
        Ok
      </button>
    </>
  );

  if (loading) renderModal = <Loader />;
  if (error)
    renderModal = (
      <>
        <h2 className='register-success-modal-title'>Error! Try again.</h2>
        <button className='modal-close-button' onClick={onClose}>
          Close
        </button>
      </>
    );

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className='register-success-modal' onClick={(event) => event.stopPropagation()}>
        {renderModal}
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
  };
};

export default connect(mapStateToProps)(RegisterSuccessModal);
