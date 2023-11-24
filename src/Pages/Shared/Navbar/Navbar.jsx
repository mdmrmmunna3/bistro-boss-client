
import { Link, NavLink } from "react-router-dom";

import { TiShoppingCart } from "react-icons/ti";
import './Navbar.css'
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
const Navbar = () => {

    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }

    const navOptions = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} style={{ textTransform: 'uppercase', fontSize: "12px" }} >Home</NavLink></li>
        <li><NavLink to="/contact" className="text-xs uppercase">Contact us</NavLink></li>
        <li><NavLink to="/dashboard" className="text-xs uppercase">Dashboard</NavLink></li>
        <li><NavLink to="/menu" className="text-xs  uppercase">Our menu</NavLink></li>
        <li><NavLink to="/order/salad" className="text-xs  uppercase">Our Shop</NavLink></li>

        <li><NavLink to="/dashboard/mycart" className="text-xs  uppercase">
            <button className="flex items-center justify-center">
                <TiShoppingCart className="text-xl" />
                <div className="badge badge-success">+{cart?.length || 0}</div>
            </button>
        </NavLink>
        </li>
        <li><NavLink to="/secret" className="text-xs  uppercase">Secret</NavLink></li>
        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <li onClick={handleLogOut}><Link className="text-xs uppercase">LogOut</Link></li>
            </> : <>
                <li><Link to="/login" className="text-xs uppercase">LogIn</Link></li>
            </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 opacity-60 font-semibold text-white bg-black max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="gap-5  menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-emerald-700 rounded-box w-96">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="uppercase block text-justify">
                        <p className="text-xl">Bistro Boss</p>
                        <p className="" style={{ letterSpacing: '3px' }}>Restaurant</p>
                    </Link>
                </div >
                <div className="navbar-end hidden lg:flex">
                    <ul className="gap-5  menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div >
        </>
    );
};

export default Navbar;