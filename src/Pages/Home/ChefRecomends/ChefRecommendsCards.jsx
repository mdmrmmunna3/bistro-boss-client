

const ChefRecommendsCards = ({ cards }) => {
    const { name, image, recipe } = cards;
    return (
        <section>
            <div className="card  bg-base-100 shadow-xl ">
                <figure><img src={image} alt="Salad" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p>{recipe}</p>
                    <div className=" justify-center">
                        <button style={{
                            padding: '20px 30px',
                            borderRadius: '8px',
                            // backgroundColor: 'rgba(232, 232, 232, 1)',

                        }} className="text-yellow-600 border-b-2 border-yellow-600 hover:bg-black uppercase bg-slate-200">Add to cart</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ChefRecommendsCards;