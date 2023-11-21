import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import MenuCategory from "./MenuCategory";
import useMenu from "../../../Hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <div className="uppercase">
                <Cover
                    img={menuImg}
                    titel="Our Menu"
                    details="Would You like to try a dish?"
                ></Cover>
            </div>
            <HeadingTitel subHeading="Don't Miss" heading="Today's Offer"></HeadingTitel>
            <MenuCategory items={offered} viewBtn="Order your favourite food"></MenuCategory>

            <MenuCategory
                img={dessertImg}
                titel="dessert"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={desserts}
                viewBtn="Order your favourite food"
            ></MenuCategory>

            <MenuCategory
                img={pizzaImg}
                titel="pizza"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={pizza}
                viewBtn="Order your favourite food"
            ></MenuCategory>

            <MenuCategory
                img={saladImg}
                titel="salad"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={salad}
                viewBtn="Order your favourite food"
            ></MenuCategory>

            <MenuCategory
                img={soupImg}
                titel="soup"
                details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                items={soup}
                viewBtn="Order your favourite food"
            ></MenuCategory>

        </div>
    );
};

export default Menu;