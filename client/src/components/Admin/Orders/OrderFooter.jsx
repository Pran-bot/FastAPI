const OrderFooter = ({ orders }) => {
    return (
        <>
            <div className="px-6 py-4 bg-gray-200
                text-sm test-gray-900 flex items-center justify-between">
                <p>Showing {orders.length} of {orders.length} orders</p>
                <div className="flex gap-4">
                    <button>← Previous</button>
                    <button>Next →</button>
                </div>
            </div>
        </>
    );
};

export default OrderFooter;