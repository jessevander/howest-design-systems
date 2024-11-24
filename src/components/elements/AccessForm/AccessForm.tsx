import { useEffect, useState } from 'react';
import Button from '../../basics/Button/Button';
import Input from '../../basics/FormElements/Input/Input';
import './AccessForm.css';

const AccessForm = () => {
  const [title, setTitle] = useState<string>('Boost Productivity with VisionAR!');
  const [subtitle, setSubtitle] = useState<string>('Empower your workforce with AR-driven efficiency and accuracy.');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'education') {
      setTitle('Reimagine Learning with VisionAR!');
      setSubtitle('Transform classrooms into immersive spaces for hands-on learning.');
    } else {
      setTitle('Boost Productivity with VisionAR!');
      setSubtitle('Empower your workforce with AR-driven efficiency and accuracy.');
    }
  }, [localStorage.getItem('theme')]);

  return (
    <div className='form-wrapper'>
      <div className='form-header'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
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
