

const HeadingTitel = ({heading, subHeading}) => {
    return (
        <div className="mx-auto md:w-3/12 text-center my-8">
            <p className="text-yellow-600 mb-2">---{subHeading}---</p>
            <h3 className="lg:text-2xl text-xl uppercase border-y-2 py-4">{heading}</h3>
        </div>
    );
};

export default HeadingTitel;