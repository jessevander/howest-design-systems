import AccessForm from '../../elements/AccessForm/AccessForm';
import './AccessPage.css';

const AccessPage = () => {
  return (
    <div className='page access-page-wrapper'>
      <div className='access-form-wrapper'>
        <AccessForm />
      </div>
      <div className='form-image-wrapper'></div>
    </div>
  );
};

export default AccessPage;
