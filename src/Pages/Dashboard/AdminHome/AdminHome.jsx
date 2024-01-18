import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";
import { IoMdCart } from "react-icons/io";

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })
    return (
        <div className=" w-full px-4">
            <h2 className="lg:text-3xl text-2xl mt-4 uppercase">Hi, {user?.displayName} </h2>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 my-6 gap-4">
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
                        <div className="lg:text-2xl text-xl text-white font-semibold">${stats?.revenue}</div>
                        <div className="text-white font-semibold font-sans lg:text-2xl text-xl">Revenue</div>
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
                    <div ><FaUsers className="text-3xl text-white"></FaUsers></div>
                    <div className="right-stat">
                        <div className="lg:text-2xl text-xl text-white font-semibold">{stats?.users}</div>
                        <div className="text-white font-semibold font-sans lg:text-2xl text-xl">New Users</div>
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
                    <div ><IoFastFood className="text-3xl text-white"></IoFastFood></div>
                    <div className="right-stat">
                        <div className="lg:text-2xl text-xl text-white font-semibold">{stats?.products}</div>
                        <div className="text-white font-semibold font-sans lg:text-2xl text-xl">MenuItem</div>
                    </div>
                </div>
                <div
                    style={
                        {
                            background: `linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)`,
                            width: '100%',
                            height: '150px'
                        }
                    }
                    className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                    <div ><IoMdCart className="text-3xl text-white"></IoMdCart></div>
                    <div className="right-stat">
                        <div className="lg:text-2xl text-xl text-white font-semibold">{stats?.orders}</div>
                        <div className="text-white font-semibold font-sans lg:text-2xl text-xl">Orders</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminHome;