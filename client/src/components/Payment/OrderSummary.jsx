import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const OrderSummary = () => {
    const { cartItems } = useSelector((state) => state.cart);

    if (!cartItems) return (
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <Loader />
        </div>
    )
    return (
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
                Order Summary
            </h3>
            <div className="space-y-4">
                {cartItems?.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.name}</p>
                            <p className="text-xs text-gray-700">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                            ₹{item.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderSummary;