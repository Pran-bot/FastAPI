import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateProfileState } from "../features/user/profileSlice";
import { setCart } from "../features/Cart/cartSlice";
import useFetch from "../shared/hooks/useFetch";
import { toast } from "react-toastify";

const AppInitializer = ({ children }) => {
    const dispatch = useDispatch();

    const { data: profileData } = useFetch("/users/me");
    const { data: cartData } = useFetch("/carts/cart");

    useEffect(() => {
        if (profileData) {
            dispatch(updateProfileState({
                name: profileData.user.name,
                email: profileData.user.email,
                role: profileData.user.role,
                status: profileData.user.is_active ? "Active" : "Blocked",
                address: profileData.user.address,
                city: profileData.user.city,
                state: profileData.user.state,
                pincode: profileData.user.pincode
            }));
        }

        if (cartData) {
            dispatch(setCart(cartData?.getcart));
        }
        if (profileData && cartData && !sessionStorage.getItem("initToast")) {
            toast.success("User data fetched successfully");
            sessionStorage.setItem("initToast", "true");
        }

    }, [profileData, cartData, dispatch]);

    return children;
};

export default AppInitializer;