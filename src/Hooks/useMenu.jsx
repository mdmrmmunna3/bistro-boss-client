import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://bistro-boss.up.railway.app/menu')
            return res.json();
        }
    })
    // const [pageCount, setPageCount] = useState(1);

    // using useeffct method 

    // useEffect(() => {
    //     fetch('https://bistro-boss.up.railway.app/menu')
    //         .then(res => res.json()) // convert respon to json 
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false)
    //             // return setPageCount(Math.ceil(data.length / 6));
    //         }) // work with data 
    // }, [])
    return [menu, loading, refetch]
}

export default useMenu;