import FoodOrder from "../../../components/FoodOrder/FoodOrder";
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import Swiper from "swiper";
// import ReactPaginate from "react-paginate";
// import { Pagination, Navigation } from 'swiper/modules';
// import { useState } from "react";

const OrderTabs = ({ items }) => {

    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(0);
    // const itemsPerPage = 10;
    // const startIndex = currentPage * itemsPerPage;
    // const endIndex = startIndex + itemsPerPage;
    // const paginatedProducts = items.slice(startIndex, endIndex);
    // setTotalPages(Math.ceil(items.length / itemsPerPage));

    // const handlePageChange = (selectedPage) => {
    //     setCurrentPage(selectedPage.selected);
    // };

    // const [pageCount, setPageCount] = useState(1);

    // const start = (Number(pageCount) - 1) * 6;
    // const end = start + 6;
    // const paginatedProducts = items.slice(start, end);
    // console.log(paginatedProducts);

    // const itemsize = 6;
    // const pageCount = Math.ceil(items.length / itemsize);
    // const slides = [... new Array(pageCount).keys()];
    // const slide= items.slice(( index))
    // console.log(slides);

    return (
        <section className="md:mx-16 lg:mx-28 mt-10">

            {/* <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper my-10"
            >
                <SwiperSlide>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10">
                        {
                            paginatedProducts.map(item => <FoodOrder
                                key={item._id}
                                item={item}
                            ></FoodOrder>)
                        }

                    </div>
                </SwiperSlide>
                


            </Swiper> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10">
                {
                    items.map(item => <FoodOrder
                        key={item._id}
                        item={item}
                    ></FoodOrder>)
                }

            </div>

            {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10">
                {
                    slides.map((item, index) => items.slice(index * itemsize, (index + 1) * itemsize) {
                        
                    }
                        // items.slice(index * itemsize, (index + 1) * itemsize)
                    )}
            </div> */}
            {/* <ReactPaginate
                nextLabel="next >"
                pageCount={pageCount}
                previousLabel="< previous"
            ></ReactPaginate> */}

        </section >
    );
};

export default OrderTabs;