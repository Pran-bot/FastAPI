import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Landing/Footer";
import PizzaInfo from "../../components/Products/PizzaInfo";
import ErrorState from "../../components/Loader/NotFound";
import useFetch from "../../shared/hooks/useFetch";
import Loader from "../../components/Loader/Loader";

const Pizza = () => {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`/pizza/pizza/${id}`);
    if (!data) return (
        <>
            <Navbar />
            <main className="mt-16">
                <Loader />
            </main>
        </>
    );
    if (error) return (
        <>
            <Navbar />
            <main className="mt-16">
                <ErrorState />
            </main>
        </>
    );
    console.log("DATA", data);
    return (
        <>
            <Navbar />
            <main className="scroll mt-16">
                <div className="p-8">
                    <PizzaInfo   pizza={data.getpizza} />
                </div>
                <Footer />
            </main>
        </>
    );
};
export default Pizza;