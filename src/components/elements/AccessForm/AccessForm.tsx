import Button from '../../basics/Button/Button';
import Input from '../../basics/FormElements/Input/Input';
import './AccessForm.css';

const AccessForm = () => {
  return (
    <div className='form-wrapper'>
      <div className='form-header'>
        <h1>Boost Productivity with VisionAR!</h1>
        <h2>Empower your workforce with AR-driven efficiency and accuracy.</h2>
      </div>
      <div className='form-content'>
        <form>
          <Input placeholder='Enter your email to get early access.' />
          <Button />
        </form>
      </div>
    </div>
  );
};

export default AccessForm;
