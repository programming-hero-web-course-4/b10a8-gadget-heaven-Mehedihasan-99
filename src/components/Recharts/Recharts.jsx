import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
const Recharts = () => {

    const gadgets = useLoaderData()

    const categoryTotals = gadgets.reduce((totals, item) => {
        totals[item.category] = (totals[item.category] || 0) + item.price;
        return totals;
    }, {});

    const chart = Object.keys(categoryTotals).map(category => ({
        category,
        price: categoryTotals[category]
    }));

    return (
        <div className="w-10-12 md:w-2/3 lg:w-3/4 mx-auto">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={chart} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="blue" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Recharts;