import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaRegTrashAlt, FaUserShield } from "react-icons/fa";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import useAdmin from "../../../Hooks/useAdmin";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const [isAdmin] = useAdmin();
    const [isDisabled, setIsDisabled] = useState(isAdmin);

    // this query function related tanstack query/react query version 3 
    //  const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('https://bistro-boss.up.railway.app/users')
    //     return res.json();
    // })

    // this query function related tanstack query/react query version 5 / latest version 
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = user => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make Admin?"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.patch(`/users/admin/${user?._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
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
        });
    }

    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });

    }

    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | All_users</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel
                subHeading="How Many?"
                heading="Manage All Users"
            ></HeadingTitel>

            {/* h3.text-xl.font-semibold.uppercase */}
            <div className="uppercase mb-2 md:mb-4 md:px-0 px-2 md:text-start text-center">
                <h3 className="text-xl font-semibold text-white">Total Users: {users.length} </h3>
            </div>
            <div className="overflow-x-auto text-white">
                <table className="table">
                    {/* head */}
                    <thead
                        style={{
                            background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                        }}
                        className="uppercase text-xs text-white">
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
                                        user.role === 'admin' ? 'admin' : <button
                                            style={{
                                                background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                                            }}
                                            onClick={() => handleMakeAdmin(user)} className="btn btn-ghost text-white btn-sm"><FaUserShield ></FaUserShield></button>
                                    }
                                </td>
                                <td>
                                    {
                                        user?.role === 'admin' ? <button disabled={isDisabled} onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                            :
                                            <button onClick={() => handleDelete(user)} className="btn btn-[#ffffff] bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                    }
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