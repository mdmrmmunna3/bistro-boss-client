import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { TbCardsFilled } from "react-icons/tb";
import { IoMdCart } from "react-icons/io";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
import { Helmet } from "react-helmet-async";


const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/admin-stats');
            return res.data;
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure('/order-stats');
            return res.data;
        }
    })

    // customShapebar
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // pieCahrtWithCustomizeLevel
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    // const pieChartData = chartData.map(data => {
    //     return { name: data.category }
    // })

    return (
        <>
            <Helmet>
                <title>Bistro Boss || Admin Home</title>
            </Helmet>
            <div className=" w-full px-4">
                <h2 className="lg:text-3xl text-2xl mt-4 uppercase text-white">Hi, {user?.displayName} </h2>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 my-6 gap-4">
                    <div
                        style={
                            {
                                background: `linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)`,
                                width: '100%',
                                height: '150px'
                            }
                        }
                        className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                        <div ><TbCardsFilled className="text-3xl text-white"></TbCardsFilled></div>
                        <div className="right-stat">
                            <div className="lg:text-2xl text-xl text-white font-semibold">${stats?.revenue}</div>
                            <div className="text-white font-semibold font-sans lg:text-2xl text-xl">Revenue</div>
                        </div>
                    </div>

                    <div
                        style={
                            {
                                background: `linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)`,
                                width: '100%',
                                height: '150px'
                            }
                        }
                        className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                        <div ><FaUsers className="text-3xl text-white"></FaUsers></div>
                        <div className="right-stat">
                            <div className="lg:text-2xl text-xl text-white font-semibold">{stats?.users}</div>
                            <div className="text-white font-semibold font-sans lg:text-2xl text-xl">New Users</div>
                        </div>
                    </div>

                    <div
                        style={
                            {
                                background: `linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)`,
                                width: '100%',
                                height: '150px'
                            }
                        }
                        className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                        <div ><IoFastFood className="text-3xl text-white"></IoFastFood></div>
                        <div className="right-stat">
                            <div className="lg:text-2xl text-xl text-white font-semibold">{stats?.products}</div>
                            <div className="text-white font-semibold font-sans lg:text-2xl text-xl">MenuItem</div>
                        </div>
                    </div>

                    <div
                        style={
                            {
                                background: `linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)`,
                                width: '100%',
                                height: '150px'
                            }
                        }
                        className="stats-main flex flex-row items-center justify-center gap-x-3 rounded-lg shadow-lg ">
                        <div ><IoMdCart className="text-3xl text-white"></IoMdCart></div>
                        <div className="right-stat">
                            <div className="lg:text-2xl text-xl text-white font-semibold">{stats?.orders}</div>
                            <div className="text-white font-semibold font-sans lg:text-2xl text-xl">Orders</div>
                        </div>
                    </div>
                </div>

                <div className="md:flex block">
                    {/* chart part start */}
                    {/* shape bar chart  */}

                    <div >
                        <BarChart
                            width={500}
                            height={300}
                            data={chartData}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="category" />
                            <YAxis />
                            <Bar dataKey="totalPrice" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </div>

                    {/* piechart with customizelevel */}

                    <div >
                        <PieChart width={400} height={400}>
                            <Legend></Legend>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="itemsCount"
                            >
                                {chartData.map((entry, index) => (
                                    <Cell name={entry?.category} key={`cell-${index}`} fill={colors[index % colors.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AdminHome;