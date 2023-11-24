
import { Link, useLocation, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

import useAuth from "../../Hooks/useAuth";


const SocialLogin = () => {
    const { googleSignUp } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handlegoogleSignUp = () => {
        googleSignUp()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })


                // Swal.fire({
                //     title: "User has been created successfully",
                //     showClass: {
                //         popup: `
                //                 animate__animated
                //                 animate__fadeInUp
                //                 animate__faster
                //               `
                //     },
                //     hideClass: {
                //         popup: `
                //                 animate__animated
                //                 animate__fadeOutDown
                //                 animate__faster
                //               `
                //     }
                // });
                // navigate('/')
            })
            .catch(error => {
                console.log('error', error.message)
            });
    }

    return (
        <div>
            <p className="text-center"><small>Or Sign Up With</small></p>
            <div className="text-center my-4">
                <Link><i className="fa-brands fa-facebook-f me-3 text-2xl px-3 py-1 border-2 border-slate-400 rounded-full btn-outline"></i></Link>
                <Link onClick={handlegoogleSignUp}><i className="fa-brands fa-google me-3 text-2xl px-2 py-1 border-2 border-slate-400 rounded-full btn-outline"></i></Link>
                <Link><i className="fa-brands fa-github me-3 text-2xl px-2 py-1 border-2 border-slate-400 rounded-full btn-outline"></i></Link>
            </div>
        </div>
    );
};

export default SocialLogin;