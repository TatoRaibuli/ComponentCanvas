import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">React & Tailwind Canvas</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link to="/" className="hover:text-green-100 font-bold border-r-2 pr-5">Canvas</Link></li>
                        <li><Link to="/custom" className="hover:text-green-100 font-bold">Custom Components</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
