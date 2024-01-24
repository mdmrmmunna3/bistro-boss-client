import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { TbCardsFilled } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import profilePic from "../../../assets/others/profile.png"


const UserHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: userStats = {} } = useQuery({
        queryKey: ['user-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/user-stats');

            // const shops = res.data.carts.filter(shop => shop.email === `${user?.email}`);

            // console.log(res.data)
            return res.data;
        }
    });

    return (
        <>
            <Helmet>
                <title>Bistro Boss || user Home</title>
            </Helmet>

            <div className="w-full px-4">
                <h2 className="lg:text-3xl text-2xl mt-4 uppercase">Hi, {user?.displayName} </h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 my-6 gap-4">
                    <div
                        style={
                            {
                                background: `linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)`,
                                width: '100%',
                                height: '150px'
                            }
                        }
                        className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                        <div ><TbCardsFilled className="text-3xl text-white"></TbCardsFilled></div>
                        <div className="right-stat">
                            <div className="lg:text-2xl text-xl text-white font-semibold">
                                {
                                    userStats?.menu ? userStats?.menu : 0
                                }</div>
                            <div className="text-white font-semibold font-sans lg:text-2xl text-xl">Menu</div>
                        </div>
                    </div>

                    <div
                        style={
                            {
                                background: `linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)`,
                                width: '100%',
                                height: '150px'
                            }
                        }
                        className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                        <div ><BsShop className="text-3xl text-white"></BsShop></div>
                        <div className="right-stat">
                            <div className="lg:text-2xl text-xl text-white font-semibold">
                                {
                                    userStats?.cart?.length ? userStats?.cart?.length : 0
                                }
                            </div>
                            <div className="text-white font-semibold font-sans lg:text-2xl text-xl">Shop</div>
                        </div>
                    </div>

                    <div
                        style={
                            {
                                background: `linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)`,
                                width: '100%',
                                height: '150px'
                            }
                        }
                        className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                        <div ><BiSolidPhoneCall className="text-3xl text-white"></BiSolidPhoneCall></div>
                        <div className="right-stat">
                            <div className="lg:text-2xl text-xl text-white font-semibold"></div>
                            <div className="text-white font-semibold font-sans lg:text-2xl text-xl">Contact</div>
                        </div>
                    </div>

                </div>

                {/* profile part  */}
                <div className="grid md:grid-cols-2 mb-6">
                    {/* profile img  */}
                    <div className="flex flex-col justify-center items-center w-full py-16 px-28 bg-[#FFEDD5] hover:bg-[#BB34F5] border-2 md:border-r-[#D1A054] md:border-b-0 border-b-[#D1A054] hover:text-white duration-700 ease-in-out">
                        <div className="avatar online mb-6">
                            <div className="w-24 rounded-full ring ring-[#D1A054] ring-offset-base-100 ring-offset-1">
                                {
                                    user?.photoURL ? <img src={user?.photoURL} alt="" /> : <img src={profilePic} />
                                }
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-normal uppercase tracking-[2px]">{user?.displayName}</h2>
                        </div>
                    </div>

                    {/* activites part  */}
                    <div className="flex flex-col justify-center items-center w-full py-16 px-28 bg-[#FEF9C3] hover:bg-[#FE4880]  hover:text-white duration-700 ease-in-out">
                        <div className="">
                            <h2 className="md:text-2xl text-lg font-normal uppercase tracking-[2px] mb-5">Your Activites</h2>
                            <div>
                                <h3><span></span>{userStats?.cart?.length}</h3>
                                <h3><span></span>{userStats?.getBookings?.length}</h3>
                                <h3><span></span>{userStats?.getReviews?.length}</h3>
                                <h3><span></span>{userStats?.getPayments?.length}</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserHome;