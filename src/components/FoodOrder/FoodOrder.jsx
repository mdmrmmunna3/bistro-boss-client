
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAuth from "../../Hooks/useAuth";


const FoodOrder = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();
    const handleAddToCart = (item) => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, price, email: user?.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch(); // refetch cart to update the number of items in the cart
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Food Order Add to Cart Successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
        else {
            Swal.fire({
                title: "Please Login for food order!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {
                        state: { from: location }
                    })
                }
            });
        }
    }

    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Salad" /></figure>
            <p className="bg-neutral text-white top-0 right-0 absolute mt-5 me-5 px-4 py-2">${price}</p>
            <div className="card-body text-center">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p>{recipe}</p>
                <div className=" justify-center">
                    <button onClick={() => handleAddToCart(item)} style={{
                        padding: '20px 30px',
                        borderRadius: '8px',
                        // backgroundColor: 'rgba(232, 232, 232, 1)',

                    }} className="text-yellow-600 border-b-2 border-yellow-600 hover:bg-black bg-slate-200 uppercase">Add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default FoodOrder;