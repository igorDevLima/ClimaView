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
    <header className="w-100% pt-12 flex justify-around items-center ">
      <div className="flex flex-col justify-start items-start">
        <p className={roboto.className} style={{ fontSize: '48px' }}>
          São Paulo
        </p>
        <p className={roboto.className} style={{ fontSize: '32px' }}>
          Segunda-feira, 28 Nov 2022
        </p>
      </div>
      <div className="button-select">
        <ChangeUnit />
        <SearchBox />
      </div>
    </header>
  );
};

export default Header;
