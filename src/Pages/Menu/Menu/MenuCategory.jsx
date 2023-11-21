import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, viewBtn, titel, img, details }) => {
    return (
        <div>
            {titel && <Cover img={img} titel={titel} details={details}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 mx-2 py-4 md:mx-16 lg:mx-28">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="my-6 text-center">
                <Link to={`/order/${titel}`}>
                    <button className="uppercase btn btn-outline border-0  border-b-2 border-b-neutral text-neutral">{viewBtn}</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;