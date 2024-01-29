
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import ChefRecommendsCards from "./ChefRecommendsCards";


const ChefRecomends = () => {
    
    const axiosPublic = useAxiosPublic();
   
    const {data: chefRecommends = []} = useQuery({
        queryKey:['menu'],
        queryFn: async () => {
            const res = axiosPublic('/menu')
            const recommendsCards = res.data.filter(cards => cards.category === 'salad');
                const saladItems = recommendsCards.filter(saladItem => saladItem.name === 'Chicken and Walnut Salad');
            return saladItems
        }
    })

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