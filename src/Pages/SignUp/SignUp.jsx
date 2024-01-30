
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import authPic from "../../assets/others/authentication.gif"


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const { createUser, userUpdateProfile } = useAuth();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                userUpdateProfile(data.name, data.photoURL)
                    .then(() => {
                        // console.log('user profile info update');
                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://bistro-boss-server-eta-bice.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    Swal.fire({
                                        title: "User has been created successfully",
                                        showClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeInUp
                                                animate__faster
                                              `
                                        },
                                        hideClass: {
                                            popup: `
                                                animate__animated
                                                animate__fadeOutDown
                                                animate__faster
                                              `
                                        }
                                    });

                                    reset();
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => {
                        console.log('error', error.message)
                    });


            })

            .catch(error => {
                console.log('error', error.message)
            });

    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img src={authPic} alt="" />
                    </div>
                    <div
                        style={{
                            boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`
                        }}
                        className="card flex-shrink-0 md:w-1/2 w-full max-w-sm bg-base-100">
                        <h1 className="text-3xl mt-2 text-center font-bold">SignUp now!</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">photo Url is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&#])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Your password must be between minLength 6 Character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Your password must be between maxLength 20 Character</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Your password must be between one uppercase, one lower case, one specail character and one numeric number</p>
                                )}

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />

                            </div>
                        </form>
                        <p className='text-center mb-2'><small>Already SignUp? <Link to="/login" className='text-yellow-500'>Go to logIn</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;