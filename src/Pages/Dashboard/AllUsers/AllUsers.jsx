import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import Swal from "sweetalert2";


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

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDelete = user => {

    }

    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | All_users</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel
                subHeading="How Many??"
                heading="Manage All Users"
            ></HeadingTitel>

            {/* h3.text-xl.font-semibold.uppercase */}
            <div className="uppercase mb-2 md:mb-4 md:px-0 px-2 md:text-start text-center">
                <h3 className="text-xl font-semibold">Total Users: {users.length} </h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="uppercase bg-[#D1A054] text-white">
                        <tr>
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
                                <td className="break-all ...">{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-[#D1A054] text-white btn-sm"><FaUserShield ></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;