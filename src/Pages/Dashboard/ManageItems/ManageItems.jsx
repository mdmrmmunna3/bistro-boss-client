import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import useMenu from "../../../Hooks/useMenu";


const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | ManageItems</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel subHeading="Hurry Up!" heading="Manage All Items"></HeadingTitel>

            <div className="uppercase mb-2 md:mb-4 md:px-0 px-2 md:text-start text-center">
                <h3 className="text-xl font-semibold">Total Items: {menu.length}  </h3>
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
                            <th>Action</th>
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
                                {/* <td>
                                            <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600 text-white btn-sm"><FaRegTrashAlt ></FaRegTrashAlt></button>
                                        </td> */}
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageItems;