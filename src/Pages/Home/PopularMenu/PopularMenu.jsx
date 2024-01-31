

import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";



const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <section className="mb-10 md:mx-16 lg:mx-28">
            <HeadingTitel
                subHeading="Cheek it out"
                heading="From our menu"
            ></HeadingTitel>

            <div className="grid md:grid-cols-2 gap-8 mx-2">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="mt-6 text-center">
                <Link to="/menu">
                    <button className="uppercase btn btn-outline border-0 border-b-2 border-b-yellow-600 text-yellow-600">View full menu</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularMenu;