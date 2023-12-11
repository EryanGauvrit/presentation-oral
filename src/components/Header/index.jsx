import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Header = () => {
    return (
        <header>
            <Link to={'/'}>
                <img src={logo} alt="logo" />
            </Link>
        </header>
    )
} 