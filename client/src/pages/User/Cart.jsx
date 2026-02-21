import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import PriceBreakDown from "../../components/Payment/PriceBreakDown";
import OrderSummary from "../../components/Payment/OrderSummary";

const CartPage = () => {
    return (
        <>
            <Navbar />
            <main className="mt-16">
                <div>
                    <OrderSummary />
                </div>
                <div>
                    <PriceBreakDown />
                </div>
                <Footer />
            </main>
        </>
    );
}

export default CartPage;