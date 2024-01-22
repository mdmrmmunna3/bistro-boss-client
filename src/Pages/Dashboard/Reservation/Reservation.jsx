import { Helmet } from "react-helmet-async";
import HeadingTitel from "../../../components/HeadingTitel/HeadingTitel";
import OurLocation from "./OurLocation";


const Reservation = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Reservation</title>
            </Helmet>
            <div className="w-full md:w-3/4">

                {/* common part  */}
            </div>

            <div className="w-ful md:w-3/4">

                {/* common part  */}
                <HeadingTitel subHeading="Visit US" heading="Our Location"></HeadingTitel>
                <OurLocation></OurLocation>

            </div>

        </>
    );
};

export default Reservation;