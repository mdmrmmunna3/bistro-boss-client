/**
 * 1. for add item 
 * // using fetch and axios  

        // fetch(img_hosting_url, {
        //     method: 'POST',
        //     body: formData
        // })
    //         .then(res => res.json())
    //         .then(imgResponse => {
    //             if (imgResponse.success) {
    //                 const imgURL = imgResponse.data.display_url;
    //                 const { name, price, category, recipe } = data;
    //                 const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
    //                 // console.log(newItem);

    //                 axiosSecure.post('/menu', newItem)
    //                     .then(data => {
    //                         console.log('after posting menu Item', data.data);
    //                         if (data.data.insertedId) {
    //                             reset()
    //                             Swal.fire({
    //                                 position: "center",
    //                                 icon: "success",
    //                                 title: "Item added successfully",
    //                                 showConfirmButton: false,
    //                                 timer: 1500
    //                             });
    //                         }
    //                     })
    //             }
    //         })
 * 
 * // 2. for update item 
// using fetch and axios  

        // fetch(img_hosting_url, {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(res => res.json())
        //     .then(imgResponse => {
        //         // console.log(imgResponse)
        //         if (imgResponse.success) {
        //             const imgURL = imgResponse.data.display_url;
        //             const { name, price, category, recipe } = data;
        //             // console.log(data)
        //             const menuItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
        //             // console.log(menuItem);

        //             axiosSecure.patch(`/menu/${_id}`, menuItem)
        //             .then(data => {
        //                 console.log(data.data)
        //                 if (data?.data?.modifiedCount > 0) {
        //                     console.log('after update',data.data.modifiedCount)
        //                     // reset()
        //                     Swal.fire({
        //                         position: "center",
        //                         icon: "success",
        //                         title: `${data?.name} is updated to the menu.`,
        //                         showConfirmButton: false,
        //                         timer: 1500
        //                     });
        //                 }
        //             })
                    
        //         }
        //     })

        3. get testimonial datas 
         // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('https://bistro-boss-server-eta-bice.vercel.app/reviews')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    //         .catch(err => console.error(err))
    // }, []);

    * 4. chefrecomeded datas
    // const [chefRecommends, setChefRecommends] = useState([]);
    // useEffect(() => {
    //     fetch('https://bistro-boss-server-eta-bice.vercel.app/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             const recommendsCards = data.filter(cards => cards.category === 'salad');
    //             const saladItems = recommendsCards.filter(saladItem => saladItem.name === 'Chicken and Walnut Salad');
    //             setChefRecommends(saladItems);

    //             // for(let i =0; i<= recommendsCards.length; i++) {
    //             //     const index = i;
    //             //     const element = recommendsCards[index];
    //             //     console.log(element);
    //             // }

    //         })
    //         .catch(err => console.error(err))
    // }, []);


    5. delete user 
    // .then((result) => {
        //     if (result.isConfirmed) {

        //         fetch(`https://bistro-boss-server-eta-bice.vercel.app/users/${user?._id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 if (data.deletedCount > 0) {
        //                     refetch();
        //                     Swal.fire({
        //                         title: "Deleted!",
        //                         text: "User has been deleted.",
        //                         icon: "success"
        //                     });
        //                 }
        //             })
        //     }
        // });

        6. foodOrder 
         // fetch('https://bistro-boss-server-eta-bice.vercel.app/carts', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(cartItem)
            // })
            //     .then(res => res.json())
            //     .then(data => {
            //         if (data.insertedId) {
            //             refetch(); // refetch cart to update the number of items in the cart
            //             Swal.fire({
            //                 position: "center",
            //                 icon: "success",
            //                 title: "Your Food Order Add to Cart Successfully",
            //                 showConfirmButton: false,
            //                 timer: 1500
            //             });
            //         }
            //     })
    

 */