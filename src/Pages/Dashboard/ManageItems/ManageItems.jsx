import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import useMenu from "../../../Hooks/useMenu";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
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

                axiosSecure.delete(`/menu/${item._id}`)

                    .then(res => {
                        // console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
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
                <title>Bistro Boss | ManageItems</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel subHeading="Hurry Up!" heading="Manage All Items"></HeadingTitel>

            <div className="uppercase mb-2 md:mb-4 md:px-0 px-2 md:text-start text-center">
                <h3 className="text-xl font-semibold text-white">Total Items: {menu.length}  </h3>
            </div>

            <div className="overflow-x-auto text-white">
                <table className="table table-xs">
                    {/* head */}
                    <thead
                        style={{
                            background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                        }}
                        className="uppercase text-xs text-white">
                        <tr>
                            <th className="py-3">
                                #
                            </th>
                            <th className="py-3">Item Image</th>
                            <th className="py-3">Item Name</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Update</th>
                            <th className="py-3">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} />
                                            </div>
                                        </div>

                                    </div>
                                </td>

                                <td>{item.name}</td>
                                <td className="">${item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button
                                            style={{
                                                background: `radial-gradient(circle at 10% 20%, rgb(26, 178, 203) 0%, rgb(0, 102, 161) 90.1%)`
                                            }}
                                            className=" text-white btn btn-sm"><FaRegEdit /></button>

                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-[#fff] bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                </td>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;