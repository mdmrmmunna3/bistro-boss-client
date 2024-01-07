import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";


// import Loading from "../../Shared/Loading/Loading";

// I have to struggle a lot to do this part.

const MyCart = () => {
    const [cart, refetch] = useCart();

    const totalPrice = cart.reduce((total, item) => total + item?.price, 0);
    // console.log(totalPrice);

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

                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your OrderItem has been deleted.",
                                icon: "success"
                            });
                        }
                    })


            }
        });
    }

    return (
        // className="px-14 w-full"
        <>
            {
                <div className="w-full md:w-3/4">
                    <Helmet>
                        <title>Bistro Boss | MyCart</title>
                    </Helmet>

                    {/* common heading  */}
                    <HeadingTitel
                        subHeading="My Cart"
                        heading="Wanna Add More?"
                    ></HeadingTitel>

                    <div className="uppercase flex justify-between items-center md:mb-6 mb-3 md:px-0 px-2">
                        <h3 className="md:text-xl text-xs font-semibold ">Total Orders:{cart.length}</h3>
                        <h3 className="md:text-xl text-xs font-semibold ">Total Price:${totalPrice}</h3>
                        <Link to="/dashboard/payment">
                            <button className="btn bg-[#D1A054] text-white btn-sm hover:text-black">Pay</button>
                        </Link>
                    </div>

                    <div className="overflow-x-auto ">
                        <table className="table">
                            {/* head */}
                            <thead className="uppercase bg-[#D1A054] text-white">
                                <tr>
                                    <th>
                                        #
                                    </th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    cart.map((item, index) => <tr key={item._id}>
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
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                        </td>
                                    </tr>)
                                }


                            </tbody>


                        </table>
                    </div>
                </div>
            }
        </>
    );
};

export default MyCart;