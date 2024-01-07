import { useForm } from "react-hook-form";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useMenu from "../../../Hooks/useMenu";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
// import useMenu from "../../../Hooks/useMenu";


const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;
const UpdateItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
    const [axiosSecure] = useAxiosSecure();
    const { _id } = useLoaderData();
    // const [menu, , refetch] = useMenu();
    // const { _id } = menu;

    const onSubmit = async (data) => {
        // console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    // console.log(data)
                    const menuItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(menuItem);

                    const menuRes = axiosSecure.patch(`/menu/${_id}`, menuItem);
                    console.log(menuRes)
                    if (menuItem) {
                        // reset()
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${data?.name} is updated to the menu.`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            })

        console.log(errors);
    }
    return (
        <div className="md:w-3/4 w-full">
            {/* common heading  */}
            <HeadingTitel subHeading="What's new?" heading="Update Item"></HeadingTitel>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </div>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </label>

                <div className="flex">
                    <label className="form-control w-full ">
                        <div className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </div>
                        <select defaultValue="Category" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Category</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Dessert</option>
                            <option>Drinks</option>
                            <option>Desi</option>
                        </select>

                    </label>

                    <label className="form-control w-full ml-4 ">
                        <div className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </div>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </label>
                </div>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </div>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                </label>

                <label className="form-control w-full  max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </div>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full  " />

                </label>

                <div className="flex items-center relative justify-center font-semibold">
                    <input
                        style={
                            {
                                background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
                                cursor: 'pointer'
                            }
                        }
                        className=" my-4 text-white px-8 py-2"
                        type="submit" value="Update Recipe Details"

                    />

                </div>
            </form>
        </div>
    );
};

export default UpdateItem;