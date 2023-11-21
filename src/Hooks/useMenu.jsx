import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json()) // convert respon to json 
            .then(data => {
                setMenu(data);
                setLoading(false)
                // return setPageCount(Math.ceil(data.length / 6));
            }) // work with data 
    }, [])
    return [menu, loading]
}

export default useMenu;