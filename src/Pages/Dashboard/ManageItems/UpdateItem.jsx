import { useForm } from "react-hook-form";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";


const UpdateItem = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = () => {

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