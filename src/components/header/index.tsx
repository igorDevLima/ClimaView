import ChangeUnit from './change-unit-buttons';
import SearchBox from './searchBox';

import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const Header: React.FC = () => {
  return (
    <header>
      <div className="search-result">
        <p id="city"></p>
        <p id="date"></p>
      </div>
      <div className="button-select">
        <ChangeUnit />
      </div>
      {/* <div className="button-mobile">
        <button id="unit-temperature-c-mobile">°C</button>
        <button id="unit-rain-mm-mobile">mm</button>
      </div> */}
      <div className="search">
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
