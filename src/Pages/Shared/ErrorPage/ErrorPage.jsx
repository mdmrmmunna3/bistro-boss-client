import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/others/404.gif';
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            {/* <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-red-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className='text-red-500'>{error.statusText || error.message}</p>
                        <p className="text-2xl font-semibold md:text-3xl">Something went wrong, Sorry, we couldn not find this page.</p>
                        <Link to="/" className='my-4 text-blue-400 btn'>Back to Home Page</Link>
                    </div>
                </div>
            </section> */}
            <div className='flex items-center justify-center'>
                <div>
                    <img src={errorImg} alt="" />
                    <p className='text-red-500 text-center'>{error.statusText || error.message}</p>

                    <div className='text-center relative flex justify-center items-center cursor-pointer'>
                        <Link
                            style={
                                {
                                    background: `linear-gradient(90deg, #835D23 0%, #B58130 100%)`,
                                    cursor: 'pointer'
                                }
                            }
                            to="/" className='my-4 px-8 text-white btn'>Back to Home Page</Link>

                        <span className="absolute right-[310px] top-[32px] text-white">
                            <FaHome />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;