import { useState } from "react";
import { Filter, Search } from "lucide-react";
import { FaFilter } from "react-icons/fa";

const statuses = [
    { label: "All Orders", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Confirmed", value: "confirmed" },
    { label: "Preparing", value: "preparing" },
    { label: "Ready", value: "ready" },
    { label: "Completed", value: "completed" },
]

const filteredOrders = orders.filter((order) => {

    const matchesSearch =
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) && 
        order.items.name.tolowercase().includes(searchTerm.tolowercase());

    const matchesStaus =
        filterStatus === "all"
            ? true
            : statuses[filterStatus](status);

    return matchesSearch && matchesStaus;
});

const OrderFilter = ({ orders }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");
    const [selectedOrder, setSelectedOrder] = useState(null);

    return (
        <>
            <div className="flex flex-col sm:flex-row gap-3 p-2">
                <div className="flex-1 realtive">
                    <Search className="absolute left-3 top-3 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search by name, status, date...."
                        className="w-full pl-10 pr-4 py-1 bg-white
                        border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500
                        focus:outline-none transition-all"
                    />
                </div>
                <div className="flex items-center gap-2 bg-white
                border border-gray-300 rounded-lg px-3 py-1">
                    <FaFilter className="text-gray-500" />
                    <select 
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="bg-transperant text-sm text-gray-800 focus:outline-none">
                        <option>All</option>
                        <option>Pending</option>
                        <option>Confirmed</option>
                        <option>Preparing</option>
                        <option>Ready</option>
                        <option>Completed</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default OrderFilter;