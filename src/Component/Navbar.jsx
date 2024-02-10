import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ProdectContext } from '../App';

function handlerCartContainer ()
{
    document.querySelector('.cart-container').classList.toggle('opacity-0');
    document.querySelector('.cart-container').classList.toggle('increase-index');
}
function Navbar ()
{
    const [,,,,,,,,,,,,,,handlerDark ] = useContext(ProdectContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
            <div className="container-fluid">
                <Link to={ '/' } className="navbar-brand mx-1">
                    Globo<span className="text-danger">Mart</span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav me-0">
                        <li className="nav-link nav-item" onClick={()=>handlerDark()}>
                            <i className="fa-regular fa-moon"></i>
                        </li>
                            <Link to={ '/' } className="nav-link nav-item">
                                Home
                            </Link>
                            <Link to={ '/categories' } className="nav-link nav-item ">
                                Categories
                            </Link>
                            <Link to={ '/savedProdects' } className="nav-link nav-item ">
                            Saved
                            </Link>
                            
                    </ul>
                </div>
                <i className="fa-solid fa-cart-shopping" onClick={handlerCartContainer}></i>
            </div>

        </nav>
    );
}
export default Navbar;