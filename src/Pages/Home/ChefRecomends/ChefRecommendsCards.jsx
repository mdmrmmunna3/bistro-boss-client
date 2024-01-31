

const ChefRecommendsCards = ({ cards }) => {
    const { name, image, recipe } = cards;
    return (
        <section>
            <div
                style={{
                    // boxShadow: `rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px`
                    boxShadow: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px`
                }}
                className="card  bg-[#0b1315] ">
                <figure><img src={image} alt="Salad" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-xl font-semibold text-white">{name}</h2>
                    <p className="text-gray-400">{recipe}</p>
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