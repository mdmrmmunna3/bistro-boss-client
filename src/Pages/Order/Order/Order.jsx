import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import foodOrder from '../../../assets/shop/order.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router-dom";
import './Order.css';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <section>
            <Helmet>
                <title>Bistro Boss | Shop</title>
            </Helmet>
            <div className="uppercase">
                <Cover
                    img={foodOrder}
                    titel="Our Shop"
                    details="Would You like to try a dish?"
                ></Cover>
            </div>
            <div className="text-center mt-10">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTabs items={salad}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={pizza}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={soup}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={desserts}></OrderTabs>
                    </TabPanel>
                    <TabPanel>
                        <OrderTabs items={drinks}></OrderTabs>
                    </TabPanel>
                </Tabs>
            </div>

        </section>
    );
};

export default Order;