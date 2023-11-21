import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";

import featuedImg from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <section>
            <section className="featued-item bg-fixed text-white relative" >
                <div className=" feature-overlay">
                    <HeadingTitel className="text-white"
                        subHeading="Check it out"
                        heading="Featued item"
                    ></HeadingTitel>
                    <div className="md:flex justify-center items-center lg:pb-16 lg:px-28 py-4 px-4">
                        <div>
                            <img src={featuedImg} className="" alt="" />
                        </div>
                        <div className="md:ml-10">
                            <p>November, 01, 2030</p>
                            <h3 className="uppercase">where can i get some?</h3>
                            <p className="text-style">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio itaque, suscipit ducimus, iusto iste laudantium et nisi fuga tempora eum esse quis debitis molestias delectus? Earum veniam natus accusamus officiis iusto ipsa labore perspiciatis quod in animi omnis, sunt ducimus.</p>
                            <div className="mt-4">
                                <button className="uppercase btn btn-outline border-0  border-b-2 border-b-white text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Featured;