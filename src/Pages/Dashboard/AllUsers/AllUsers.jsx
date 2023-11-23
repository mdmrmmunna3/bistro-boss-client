import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {
    // this query function related tanstack query/react query version 3 
    //  const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:5000/users')
    //     return res.json();
    // })

    // this query function related tanstack query/react query version 5 / latest version 
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json();
        }
    })

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | All_users</title>
            </Helmet>
            {/* h3.text-xl.font-semibold.uppercase */}
            <h3 className="text-xl font-semibold uppercase mb-4">Total Users: {users.length} </h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="uppercase bg-[#D1A054] text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Blue</td>
                                <td>Blue</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;