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
    //     const res = await fetch('http://localhost:5000/users')
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
        // fetch(`http://localhost:5000/users/admin/${user._id}`, {
        //     method: 'PATCH'
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount) {
        //             refetch();
        //             Swal.fire({
        //                 position: "top-center",
        //                 icon: "success",
        //                 title: `${user.name} is an Admin Now`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             });
        //         }
        //     })

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

        // .then((result) => {
        //     if (result.isConfirmed) {

        //         fetch(`http://localhost:5000/users/${user?._id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data.deletedCount > 0) {
        //                     refetch();
        //                     Swal.fire({
        //                         title: "Deleted!",
        //                         text: "User has been deleted.",
        //                         icon: "success"
        //                     });
        //                 }
        //             })


        //     }
        // });
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
                                    {
                                        user?.role === 'admin' ? <button disabled={isDisabled} onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                            :
                                            <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
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