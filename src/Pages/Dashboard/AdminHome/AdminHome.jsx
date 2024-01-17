import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


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
        <div className=" w-full">
            <h2 className="text-4xl">Hi, {user?.displayName} </h2>
        </div>
    );
};

export default AdminHome;