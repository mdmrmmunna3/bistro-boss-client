
import { Link, NavLink } from "react-router-dom";

import { TiShoppingCart } from "react-icons/ti";
import './Navbar.css'
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import useAdmin from "../../../Hooks/useAdmin";
import profilePic from "../../../assets/others/profile.png";
import { MdMenuOpen } from "react-icons/md";
import { GiCrossedSwords } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {

    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [iconSwap, setIconSwap] = useState(false)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleIconSwap = () => {
        // Toggle the state of showMenu when the summary is clicked
        setIconSwap(!iconSwap);
    };

    const navOptions = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined} style={{ textTransform: 'uppercase', fontSize: "12px" }} >Home</NavLink></li>

        <li><NavLink to="/menu" className="text-xs  uppercase">Our menu</NavLink></li>
        <li><NavLink to="/order/salad" className="text-xs  uppercase">Order Food</NavLink></li>

        {/* <li><NavLink to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'} className="text-xs uppercase">Dashboard</NavLink></li>  */}
        {
            user && isAdmin && <li><NavLink to='/dashboard/adminhome' className="text-xs uppercase">Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink to='/dashboard/userhome' className="text-xs uppercase">Dashboard</NavLink></li>
        }

        <li><NavLink to="/contactUs" className="text-xs uppercase">Contact us</NavLink></li>

        {user && <li className="pt-1"><NavLink to="/dashboard/mycart" className="text-xs  uppercase">
            <button className="flex items-center justify-center">
                <TiShoppingCart className="text-xl" />
                <div className="badge badge-success">+{cart?.length || 0}</div>
            </button>
        </NavLink>
        </li>}

        {/* <li><NavLink to="/secret" className="text-xs  uppercase">Secret</NavLink></li> */}

        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <li onClick={handleLogOut}><Link className="text-xs uppercase">LogOut</Link></li>
            </> : <>
                <li><Link to="/login" className="text-xs uppercase">LogIn</Link></li>
            </>
        }

        <NavLink to="/dashboard/userHome" title={user?.displayName} className="btn btn-ghost btn-circle avatar flex items-start">
            <div className=" w-8 rounded-full pt-0 dropdown">
                {
                    user?.photoURL ? <img alt="" src={user?.photoURL} /> : <img alt="" src={profilePic} />
                }
            </div>
        </NavLink>


    </>

    return (
        <>
            <div className="navbar fixed z-10 opacity-90 font-semibold text-white bg-[#0b1315] ">

                <div className="navbar-start">
                    <Link to="/" className="uppercase block text-justify">
                        <h3 className="md:text-sm lg:text-xl text-xs" style={{ letterSpacing: '3px' }}>Bistro Boss</h3>
                        <h3 className="md:text-sm lg:text-xl text-xs" style={{ letterSpacing: '3px' }}>Restaurant</h3>
                    </Link>
                </div>

                <div className="navbar-end lg:hidden">
                    <details className="dropdown" onClick={handleIconSwap}>
                        <summary tabIndex={0} className="btn btn-ghost lg:hidden swap swap-rotate">
                            {iconSwap ? <GiCrossedSwords className="h-6 w-6 fill-current" /> : <MdMenuOpen className="h-6 w-6 fill-current" />}
                        </summary>
                        <ul tabIndex={0} className="gap-5 menu-sm right-[1px] dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white text-black rounded-box w-96">
                            {navOptions}
                        </ul>
                    </details>
                </div >



                <div className="navbar-end hidden lg:flex items-center">
                    <ul className="gap-5  menu-horizontal px-1 pt-5">
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