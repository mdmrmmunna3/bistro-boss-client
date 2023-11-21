

const Footer = () => {
    const getYear = () => {
        const date = new Date();
        let year = date.getFullYear();
        document.getElementById("current_year").innerHTML = year;
    }

    return (
        <footer>
            <div className="grid md:grid-cols-2 bg-neutral text-neutral-content">
                <aside className="text-center p-10 hover:bg-slate-800">
                    <header className="uppercase text-xl mb-4">Contact Us</header>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </aside>
                <nav className="text-center p-10 hover:bg-slate-800">
                    <header className="text-xl mb-4">Follow Us</header>
                    <div className="">
                        <p>Join us on social media</p>
                        <ul className="flex justify-center items-center">
                            <li className="me-6 mt-4 text-xl"><a href="#"><i className="fa-brands fa-facebook-f text-white"></i></a></li>
                            <li className="me-6 mt-4 text-xl"><a href="#"><i className="fa-brands fa-instagram text-white"></i></a></li>
                            <li className="me-6 mt-4 text-xl"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* <div className="footer footer-center p-4 bg-base-300 text-base-content">
            </div> */}
            <aside className="text-center py-3 bg-black text-white">
                <p onMouseEnter={getYear}>Copyright &copy; <span id="current_year"></span> CulinaryCloud.All rights Reserved</p>
            </aside>

        </footer>
    );
};

export default Footer;