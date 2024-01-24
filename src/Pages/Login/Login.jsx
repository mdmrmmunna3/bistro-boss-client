import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [disabled, setDisabled] = useState(true);

    const { logIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handelLogin = even => {
        even.preventDefault();
        const form = even.target;
        const email = form?.email?.value;
        const password = form?.password?.value;
        // console.log(email, password);
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: `${user?.displayName} has been Login successfully`,
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

                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                const errorCode = errorMessage.startsWith('Firebase: Error (auth/') ? errorMessage.slice(22, -2) : errorMessage;
                setLoginError(errorCode);
            });



        // form.reset();
    }

    const handelCaptchaValidation = (e) => {
        e.preventDefault();
        const user_captcha_value = e.target.value;
        // console.log(user_captcha_value);
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            alert('Captcha Does Not Match');
            setDisabled(true);
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                                <p className='text-red-800 font-semibold'>{loginError}</p>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handelCaptchaValidation} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

                            </div>
                            {/* TODO: make button disabled for captcha */}
                            <div className="form-control mt-6">
                                <input disabled={false} className="btn btn-primary" type="submit" value="login" />
                            </div>
                        </form>
                        <p className='text-center mb-2'><small>New Here? <Link to="/signUp" className='text-yellow-500'>Create a New Account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;