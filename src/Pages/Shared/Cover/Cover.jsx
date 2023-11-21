import { Parallax } from 'react-parallax';
import './Cover.css'

const Cover = ({ img, titel, details }) => {
    return (
        <section>
            <Parallax
                blur={{ min: -25, max: 25 }}
                bgImage={img}
                bgImageAlt="menu bg img"
                strength={-200}
            >
                <div className="hero md:h-[700px] h-[350px]">
                    <div className="">
                        <div className="hero-content menu-overlay md:px-44 md:py-12 p-0 text-center text-white">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">{titel}</h1>
                                <p className="mb-5">{details}</p>

                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>

        </section>
    );
};

export default Cover;