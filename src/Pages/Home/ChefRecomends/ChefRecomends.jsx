import { useEffect, useState } from "react";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import ChefRecommendsCards from "./ChefRecommendsCards";


const ChefRecomends = () => {
    const [chefRecommends, setChefRecommends] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const recommendsCards = data.filter(cards => cards.category === 'salad');
                const saladItems = recommendsCards.filter(saladItem => saladItem.name === 'Chicken and Walnut Salad');
                setChefRecommends(saladItems);

                // for(let i =0; i<= recommendsCards.length; i++) {
                //     const index = i;
                //     const element = recommendsCards[index];
                //     console.log(element);
                // }

            })
            .catch(err => console.error(err))
    }, [])
    return (
        <section className="mb-10 md:mx-16 lg:mx-28">
            <HeadingTitel
                subHeading="Should Try"
                heading="Chef Recommends"
            ></HeadingTitel>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                {
                    chefRecommends.map(cards => <ChefRecommendsCards
                        key={cards._id}
                        cards={cards}
                    ></ChefRecommendsCards>)
                }
            </div>
        </section>
    );
};

export default ChefRecomends;