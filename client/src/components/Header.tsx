import { Link } from 'react-router';
import LogoutButton from './LogoutButton';

const Header = () => {
  return (
    <header className="bg-zinc-800 text-white p-4">
      <div className="grid grid-cols-2">
        <h1 className="inline w-auto">iJunior Task Board</h1>
        
        <nav className="justify-self-end">
          <Link to="/" className="border-2 m-0.5 p-0.5">Dashboard</Link>
          <Link to="/clients" className="border-2 m-0.5 p-0.5">Clientes</Link>
          <Link to="/service-orders" className="border-2 m-0.5 p-0.5">Ordens de Serviço</Link>
          <LogoutButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;