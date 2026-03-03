import Loader from "../Loader/Loader";
import useFetch from "../../shared/hooks/useFetch";
import ErrorState from "../Loader/NotFound";

const OrderSummary = () => {
    const { data, loading, error } = useFetch(`/carts/cart`);

    if (loading) return (
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <Loader />
        </div>
    ); else if(error) return (
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <ErrorState />
        </div>
    );
    return (
        <div className="rounded-lg border border-gray-200 bg-gray-100 p-6">
            <h3 className="mb-6 text-lg font-semibold text-gray-900">
                Order Summary
            </h3>
            <div className="space-y-4">
                {data?.getcart?.cart_items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{item.pizza.name}</p>
                            <p className="text-xs text-gray-700">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                            ₹{item.pizza.price}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderSummary;