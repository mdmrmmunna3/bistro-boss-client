import { NavLink, Outlet } from "react-router-dom";

import { FaShoppingCart, FaHome, FaCalendarAlt, FaWallet, FaShoppingBag, FaUtensils, FaBook, FaUsers } from "react-icons/fa";
import { MdPostAdd, MdEditCalendar, MdOutlineMenu, MdContacts } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import drawerImg from '../assets/icon/button.png'

import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
// import useAuth from "../Hooks/useAuth";

const Dashboard = () => {
    const [cart] = useCart();
    // TODO: load data from the server to have dynamic isAdmin based on data
    // const isAdmin = true;
    const [isAdmin] = useAdmin();
    // const { setLoading } = useAuth();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center ">
                {/* Page content here */}
                <div className="">
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
                        <img src={drawerImg}
                            style={
                                {
                                    width: '30px'
                                }
                            }
                        />
                    </label>
                </div>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg_none p-4 h-screen w-80 uppercase bg-[#D1A054]">
                    <div className="block uppercase font-semibold mb-10">
                        <p className="text-2xl">Bistro Boss</p>
                        <p className="text-xl" style={{ letterSpacing: '3px' }}>Restaurant</p>
                    </div>
                    {/* Sidebar content here */}

                    {/* {setLoading(false) || */}
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome className="text-xl"></FaHome > Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils className="text-xl"></ FaUtensils> Add Items </NavLink></li>
                            <li><NavLink to="/dashboard/manageItems"><FaWallet className="text-xl"></FaWallet > Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/allBookings"><FaBook className="text-xl"></FaBook> Manage Bookings
                            </NavLink></li>
                            <li><NavLink to="/dashboard/allUsers"><FaUsers className="text-xl"></FaUsers> All Users</NavLink></li>

                        </> : <>

                            <li><NavLink to="/dashboard/userhome"><FaHome className="text-xl"></FaHome > User Home</NavLink></li>
                            <li><NavLink to="/dashboard/reservation"><FaCalendarAlt className="text-xl"></FaCalendarAlt > Reservention</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"><FaWallet className="text-xl"></FaWallet > Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart className="text-xl"></FaShoppingCart> My Cart  <span className="badge badge-success">+{cart?.length || 0}</span>
                            </NavLink></li>
                            <li><NavLink to="/dashboard/addReview"><MdPostAdd className="text-xl"></MdPostAdd> Add Review</NavLink></li>
                            <li><NavLink to="/dashboard/myBooking"><MdEditCalendar className="text-xl"></MdEditCalendar > My Booking</NavLink></li>

                        </>
                    }


                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome className="text-xl"></FaHome > Home </NavLink></li>
                    <li><NavLink to="/menu"><MdOutlineMenu className="text-xl"></MdOutlineMenu > Menu </NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag className="text-xl"></FaShoppingBag > Order Shop </NavLink></li>
                    <li><NavLink to="/contactUs"><MdContacts className="text-xl"></MdContacts  > Contact </NavLink></li>
                    <li><NavLink to="/login"><FiLogOut className="text-xl"></FiLogOut>LogOut</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;