import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import { ImSpoonKnife } from "react-icons/im";
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    console.log(errors);

    return (
        <div className="md:w-3/4 w-full">
            <Helmet>
                <title>Bistro Boss | All_users</title>
            </Helmet>
            {/* common heading  */}
            <HeadingTitel subHeading="What's new?" heading="Add An Item"></HeadingTitel>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe Name*</span>
                    </div>
                    <input type="text" placeholder="Recipe Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full max-w-xs" />
                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Category*</span>
                    </div>
                    <select {...register("category", { required: true })} className="select select-bordered">
                        <option disabled selected>Category</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Dessert</option>
                        <option>Drinks</option>
                    </select>

                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </div>
                    <input type="number" placeholder="Price"
                        {...register("price", { required: true })}
                        className="input input-bordered w-full max-w-xs" />
                </label>

                <label className="form-control">
                    <div className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </div>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>

                </label>

                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Item Image*</span>
                    </div>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs " />

                </label>

                <div className="flex items-center relative">
                    <input
                        style={
                            {
                                background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`
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