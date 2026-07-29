import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const SkyMart = createContext();

export const SkyMartProvider = ({ children }) => {
    const navigate = useNavigate();

    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) || null
    );

    const [isLoggedIn, setIsLoggedIn] = useState(
        JSON.parse(localStorage.getItem("isLoggedIn")) || false
    );

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();

            setProducts(data.products);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };
    const addToCart = (product) => {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );

        if (existingProduct) {
            const updatedCart = cart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            setCart(updatedCart);
        } else {
            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1,
                },
            ]);
        }
    };
    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };
    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };
    const decreaseQuantity = (id) => {
        setCart(
            cart.flatMap((item) => {
                if (item.id !== id) return item;

                if (item.quantity === 1) return [];

                return {
                    ...item,
                    quantity: item.quantity - 1,
                };
            })
        );
    };

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("all");
    const [sortBy, setSortBy] = useState("default");
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );

    useEffect(() => {
        fetchProducts();
    }, []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    return (
        <SkyMart.Provider
            value={{
                users,
                setUsers,
                currentUser,
                setCurrentUser,
                isLoggedIn,
                setIsLoggedIn,
                products,
                loading,
                search,
                setSearch,
                category,
                setCategory,
                sortBy,
                setSortBy,
                navigate,
                cart,
                setCart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
            }}
        >
            {children}
        </SkyMart.Provider>
    );
};