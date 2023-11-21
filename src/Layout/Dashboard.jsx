import { NavLink, Outlet } from "react-router-dom";

import { FaShoppingCart, FaHome, FaCalendarAlt, FaWallet, FaShoppingBag } from "react-icons/fa";
import { MdPostAdd, MdEditCalendar, MdOutlineMenu, MdContacts } from "react-icons/md";


import useCart from "../Hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart();
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg_none p-4 w-80 uppercase">
                    <div className="block uppercase mb-10">
                        <p className="text-2xl">Bistro Boss</p>
                        <p className="text-xl" style={{ letterSpacing: '3px' }}>Restaurant</p>
                    </div>
                    {/* Sidebar content here */}
                    <li><NavLink to="/dashboard/home"><FaHome className="text-xl"></FaHome > User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservention"><FaCalendarAlt className="text-xl"></FaCalendarAlt > Reservention</NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"><FaWallet className="text-xl"></FaWallet > Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart  <span className="badge badge-success">+{cart?.length || 0}</span>
                    </NavLink></li>
                    <li><NavLink to="/dashboard/addReview"><MdPostAdd className="text-xl"></MdPostAdd> Add Review</NavLink></li>
                    <li><NavLink to="/dashboard/myBooking"><MdEditCalendar className="text-xl"></MdEditCalendar > My Booking</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome className="text-xl"></FaHome > Home </NavLink></li>
                    <li><NavLink to="/menu"><MdOutlineMenu className="text-xl"></MdOutlineMenu > Menu </NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag className="text-xl"></FaShoppingBag > Shop </NavLink></li>
                    <li><NavLink to="/contact"><MdContacts className="text-xl"></MdContacts  > Contact </NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;