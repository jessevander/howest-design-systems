import { useState } from 'react';
import AccessPage from '../Pages/AccessPage/AccessPage';

import './App.css';
import { Theme } from '../../types/Theme';

function App() {
  const [theme, setTheme] = useState<Theme>('business');

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value as Theme);
    localStorage.setItem('theme', e.target.value);
  }

  return (
    <div className={`app-wrapper theme-${theme}`}>
      <select id="theme-switcher" onChange={handleThemeChange }>
        <option value='business'>Business</option>
        <option value='education'>Education</option>
      </select>
      <AccessPage />
    </div>
  );
}

export default App;
