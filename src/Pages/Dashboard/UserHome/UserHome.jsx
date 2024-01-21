import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { TbCardsFilled } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


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
            </div>
        </>
    );
};

export default UserHome;