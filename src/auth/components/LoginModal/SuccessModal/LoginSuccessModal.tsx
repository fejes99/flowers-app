import { connect } from 'react-redux';
import Button from '../../../../common/components/Button/Button';
import Loader from '../../../../common/components/Loader/Loader';
import Error from '../../../../common/Error';
import { StoreState } from '../../../../store/store';

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
      <h2 className='modal-title'>Congratulations! You have successfully logged in!</h2>
      <div className='modal-center-row'>
        <Button type='success' disabled={false} onClick={onProfile}>
          Profile
        </Button>
        <Button type='success' disabled={false} onClick={onClose}>
          OK
        </Button>
      </div>
    </>
  );

  if (loading) renderModal = <Loader />;
  if (error)
    renderModal = (
      <>
        <h2 className='modal-title'>{error.response.data.error}</h2>
        <Button type='fail' disabled={false} onClick={onClose}>
          Close
        </Button>
      </>
    );

  return (
    <div className={`modal-container ${show ? 'show' : ''}`}>
      <div className='modal' onClick={(event) => event.stopPropagation()}>
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
