import { useState } from "react";
import FoodOrder from "../../../components/FoodOrder/FoodOrder";
import ReactPaginate from 'react-paginate';
import './OrderTabs.css'
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const OrderTabs = ({ items }) => {
    // console.log(items);
    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 6;

    // pagination event handeler 
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    }

    const offset = currentPage * itemPerPage;

    const currentPageItems = items.slice(offset, offset + itemPerPage);

    return (
        <section className="md:mx-16 lg:mx-28 mt-10">

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 my-10">
                {
                    currentPageItems.map(item => <FoodOrder
                        key={item._id}
                        item={item}
                    ></FoodOrder>)
                }

            </div>

            {/* Pagination component */}
            <div className="mb-5">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(items.length / itemPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>

        </section >
    );
};

export default OrderTabs;