import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from 'react-hook-form';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import useAxiosSecure from './useAxiosSecure';


const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_TOKEN;

const AddItem = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;
    const [axiosSecure] = useAxiosSecure();
    const onSubmit = data => {
        // console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    // console.log(newItem);

                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            // console.log('after posting menu Item', data.data);
                            if (data.data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Item added successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })
                }
            })
    };
    console.log(errors);

    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | AddItems</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel subHeading="What's new?" heading="Add An Item"></HeadingTitel>

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
                            <option value='pizza'>Pizza</option>
                            <option value='soup'>Soup</option>
                            <option value='salad'>Salad</option>
                            <option value='dessert'>Dessert</option>
                            <option value='drinks'>Drinks</option>
                            <option value='desi'>Desi</option>
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
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />

                </label>

                <div className="flex items-center relative">
                    <input
                        style={
                            {
                                background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
                                cursor: 'pointer'
                            }
                        }
                        className=" my-4 text-white px-8 py-2"
                        type="submit" value="Add Item"

                    />
                    <span className="absolute left-[103px] text-white"><ImSpoonKnife /></span>
                </div>
            </form>
        </div>
    );
};

export default AddItem;