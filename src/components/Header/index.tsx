import { Navbar} from './styles'
import {BsMoon} from 'react-icons/bs';

export const Header = () => {
  return (
    <Navbar>
      <header>
        <div className="navTitle">
          <h1>Where in the world?</h1>
          <p><BsMoon/> dark mode</p>
        </div>
      </header>
    </Navbar>
  );
};


