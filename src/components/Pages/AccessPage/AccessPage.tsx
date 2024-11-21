import AccessForm from '../../elements/AccessForm/AccessForm';
import './AccessPage.css';

import FormImage from '../../../assets/form-image.png';

const AccessPage = () => {
  return (
    <div className='page access-page-wrapper'>
      <div className='access-form-wrapper'>
        <AccessForm />
      </div>
      <div className='form-image-wrapper'>
        <img alt='access-page image' src={FormImage} />
      </div>
    </div>
  );
};

export default AccessPage;
