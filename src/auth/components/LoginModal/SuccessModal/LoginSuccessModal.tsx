import { connect } from 'react-redux';
import Loader from '../../../../common/components/Loader/Loader';
import Error from '../../../../common/Error';
import { StoreState } from '../../../../store/store';
import './LoginSuccessModal.css';

interface Props {
  show: boolean;
  loading: boolean;
  error: Error | null;
  onClose: () => void;
  onProfile: () => void;
}

const LoginSuccessModal: React.FC<Props> = ({ show, loading, error, onClose, onProfile }) => {
  let renderModal = (
    <>
      <h2 className='login-success-modal-title'>
        Congratulations! You have successfully logged in!
      </h2>
      <div className='login-success-modal-row'>
        <button className='login-success-modal-submit-button' onClick={onProfile}>
          Profile
        </button>
        <button className='login-success-modal-submit-button' onClick={onClose}>
          Ok
        </button>
      </div>
    </>
  );

  if (loading) renderModal = <Loader />;
  if (error)
    renderModal = (
      <>
        <h2 className='login-success-modal-title'>Error! Try again.</h2>
        <button className='modal-close-button' onClick={onClose}>
          Close
        </button>
      </>
    );

  return (
    <div className={`modal ${show ? 'show' : ''}`}>
      <div className='login-success-modal' onClick={(event) => event.stopPropagation()}>
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

export default connect(mapStateToProps)(LoginSuccessModal);
