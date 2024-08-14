import { HashLink as Link } from 'react-router-hash-link';
import logo from "../../Assests/side-view-empty-supermarket-shopping-cart-isolated-on-white-background-illustration-vector-removebg-preview.png";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        style={{backgroundColor: "gainsboro"}}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <img
                        src={logo}
                        alt="Logo"
                        width="50"
                        height="40"
                        className="d-inline-block align-text-top mx-3"
                    />
                    <Link className="navbar-brand text-white" to="/">
                        E-Commerce Store
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="#products">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/cart" target="_blank">
                                    Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="#contact">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button
                                type='button'
                                className="btn btn-outline-success"
                                style={{ marginRight: '5px', marginTop: '10px', backgroundColor: 'rgb(255, 255, 255)' }}
                                
                            >
                                <Link to="/register">Register</Link>
                            </button>
                            <button
                                type='button'
                                className="btn btn-outline-success"
                                style={{ marginTop: '10px', backgroundColor: 'rgb(255, 255, 255)' }}
                                
                            >
                                <Link to="/login">Login</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
