import {Link} from "react-router-dom";

function Header(){
    return(

<div>
    <nav>
        <Link to="/" className='navLink'>
            Home
        </Link>
        <Link to="/about" className='navLink'>
            ABOUT
        </Link>
        <Link to="/contact" className='navLink'>
            CONTACT
        </Link>
    </nav>
</div>



    )
}
export default Header