import { Eye } from "lucide-react";
import Footer from "../../Landing/Footer";
import OrderFooter from "./OrderFooter";
import OrderFilter from "./OrderFilter";
const OrderTable = ({ orders }) => {
    // if (!orders) {
    //     console.log("No order!!");
    //     return null;
    // }
    const OrderStatusColor = {
        pending: "bg-yellow-700 text-yellow-100",
        confirmed: "bg-blue-700 text-blue-100",
        preparing: "bg-purple-700 text-purple-100",
        ready: "bg-green-700 text-green-100",
        completed: "bg-emerald-700 text-emrald-100"

    }
    return (
        <>
            <div className="w-full bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <div>
                    <OrderFilter orders={orders}/>
                </div>
                <div>
                    <table className="w-full">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider"> order ID</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider"> Items</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Total</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Payment</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-4 text-left text-xs
                            font-semibold text-gray-900 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {orders.length > 0 ? (orders.map((order) => (
                                <tr className="bg-white hover:bg-gray-100">
                                    <td className="px-6 py-4 ">
                                        {order.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.customerName}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-col gap-2">
                                            {order.items.map((item, idx) => (
                                                <span>{item.name}
                                                    <span>{item.quantity}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.totalPrice}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-gray-200 px-3 py-1 rounded-full uppercase text-xs font-medium">
                                            {order.paymentMethod}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs 
                                        font-medium uppercase ${OrderStatusColor[order.status]}`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        {order.orderDate}
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center gap-3">
                                            <button className="text-gray-900 hover:text-[#ff4d4d]">
                                                <Eye />
                                            </button>
                                            <button className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-[#ff4d4d]">
                                                Update
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))) :
                                (
                                    <tr>
                                        <td>
                                            <p>No Pizzas Found</p>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                <OrderFooter orders={orders} />

            </div>
        </>
    );
};

export default OrderTable;