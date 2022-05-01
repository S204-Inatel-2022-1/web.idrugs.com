import {Link} from 'react-router-dom';

import Container from './Container';
//import Search from './Search';

import styles from './Navbar.module.css'
import logo from '../../img/idrugs-logo.png';
import Search from './Search';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">   <img src={logo} id={styles.logo} alt="iDrugs" />   </Link>
                <Search />
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li className={styles.item}>
                        <Link to="/Departments">Departamentos</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;