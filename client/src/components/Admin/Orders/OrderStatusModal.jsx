import { useEffect, useState } from "react";
import useManualFetch from "../../../shared/hooks/useManualFetch.jsx";
import Modal from "../../Modal/Modal.jsx";
import { toast } from "react-toastify";

const statusTransitions = {
    pending: ["confirmed"],
    confirmed: ["preparing"],
    preparing: ["ready"],
    ready: ["completed"],
    completed: [],
}
const ORDER_FLOW = ["pending", "confirmed", "preparing", "ready", "completed"];

const OrderStatusModal = ({ order, isOpen, onClose, actionType, onStatusChange }) => {
    const [selectedstatus, setSelectedstatus] = useState("");
    const [updating, setUpdating] = useState(false);

    const { execute: updateExecute } = useManualFetch();
    const handleUpdateOrder = async (orderId, newStatus) => {
        try {
            setUpdating(true);
            await updateExecute(`/orders/order/${orderId}/status`, "PATCH",
                { new_status: newStatus }
            );
            toast.success("Order status updated successfully");
            onStatusChange?.(newStatus); 
            onClose(); 
        } catch (err) {
            toast.error(err.message || "Failed to update order");
        } finally {
            setUpdating(false);
        }
    };

    if (!isOpen || !order) return null;

    const availableTransitions = statusTransitions[order?.order_statusstatus] || [];

    if (actionType === "edit") {
        return (

            <>
                {/* <Modal isOpen={isOpen} onClose={onClose} title="Update Order Status">
                    <div className="space-y-4">
                        <div className="flex flex-row items-center justify-between gap-3">
                            <p className="text-gray-900 font-semibold">Orders ID:</p>
                            <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d]">{`ORD${order._id.slice(-6).toUpperCase()}`}</p>
                        </div>
                        <div className="flex flex-row items-center justify-between gap-3">
                            <p className="text-gray-900 font-semibold">Current Status:</p>
                            <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">{order?.order_status}</p>
                        </div>

                        {availableTransitions.length > 0 ? (
                            <div className="flex items-center justify-between">
                                <p>Update to:</p>
                                <div>
                                    {availableTransitions.map((status) => (
                                        <button
                                            key={status}
                                            className="w-full px-3 py-1 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors font-medium uppercase"
                                            onClick={() => {
                                                onStatusChange(status)
                                            }}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )
                            :
                            (<div>
                                <p>This Order is already completed.</p>
                            </div>)}
                    </div>
                </Modal> */}
                <Modal isOpen={isOpen} onClose={onClose} title="Update Order Status">
                    <div className="space-y-6">

                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-800">Order ID:</p>
                            <span className="px-3 py-1 bg-gray-200 rounded-md font-medium">
                                {`ORD${order._id.slice(-6).toUpperCase()}`}
                            </span>
                        </div>

                        <div className="flex justify-between items-center">
                            <p className="font-semibold text-gray-800">Current Status:</p>
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md uppercase font-medium">
                                {order?.order_status}
                            </span>
                        </div>

                        <div className="flex justify-between items-center mt-6 gap-3">
                            {ORDER_FLOW.map((status, index) => {
                                const currentIndex = ORDER_FLOW.indexOf(order.order_status);

                                const isCompleted = index < currentIndex;
                                const isCurrent = index === currentIndex;
                                const isNext = index === currentIndex + 1;

                                return (
                                    <div key={status} className="flex-1 text-center">

                                        <button
                                            disabled={!isNext}
                                            onClick={() => { isNext && handleUpdateOrder(order._id, status) }}
                                            className={`
                                w-full py-2 rounded-lg text-sm font-medium uppercase
                                transition-all duration-200 px-1
                                ${isCompleted ? "bg-green-500 text-white cursor-default" : ""}
                                ${isCurrent ? "bg-blue-600 text-white cursor-default" : ""}
                                ${isNext ? "bg-green-700 text-white hover:opacity-90" : ""}
                                ${!isCompleted && !isCurrent && !isNext ? "bg-gray-200 text-gray-500 cursor-not-allowed" : ""}
                            `}
                                        >
                                            {status}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                        {/* <div className="mt-6 border-t pt-4">
                            <p className="text-sm font-semibold text-gray-700 mb-2">
                                Manual Override (Admin Only)
                            </p>

                            <select
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                                value={selectedstatus}
                                onChange={(e) => setSelectedstatus(e.target.value)}
                            >
                                <option value="" disabled>
                                    Select status manually
                                </option>

                                {ORDER_FLOW.map((status) => (
                                    <option key={status} value={status}>
                                        {status.toUpperCase()}
                                    </option>
                                ))}
                            </select>

                            <button
                                onClick={() => handleUpdateOrder(order._id, selectedstatus)}
                                className="mt-3 w-full bg-gray-500 text-gray-900 py-2 rounded-lg"
                            >
                                Submit
                            </button>
                        </div> */}

                        {order?.order_status === "completed" && (
                            <p className="text-center text-gray-500 mt-4">
                                This order has been completed.
                            </p>
                        )}
                    </div>
                </Modal>
            </>
        );
    } else if (actionType === "view") {
        return (
            <Modal isOpen={isOpen} onClose={onClose} title="Order Details">
                <div className="space-y-4">                    <div className="flex flex-row items-center justify-between gap-3">
                    <p className="text-gray-900 font-semibold">Orders ID:</p>
                    <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d]">{`ORD${order._id.slice(-6).toUpperCase()}`}</p>
                </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <p className="text-gray-900 font-semibold">Current Status:</p>
                        <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">{order?.order_status}</p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <p className="text-gray-900 font-semibold">Payment Method:</p>
                        <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">online</p>
                    </div>
                    <div className="flex flex-row items-center justify-between gap-3">
                        <p className="text-gray-900 font-semibold">Total Amount:</p>
                        <p className="bg-gray-400 px-2 rounded-lg hover:bg-[#ff4d4d] uppercase">₹{order?.total_price}</p>
                    </div>
                </div >
            </Modal>
        );
    }
};

export default OrderStatusModal;