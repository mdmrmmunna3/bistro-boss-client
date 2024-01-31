

const HeadingTitel = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto md:w-4/12 text-center my-8">
            <p className="text-yellow-600 mb-2 text-2xl heading_titel">---{subHeading}---</p>
            <h3 className="lg:text-2xl text-xl uppercase border-y-2 py-4 text-yellow-600">{heading}</h3>
        </div>
    );
};

export default HeadingTitel;