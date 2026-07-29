import { useContext } from "react";
import { SkyMart } from "../context/AppContext";
import ProductCard from "./ProductCard";
import { Link } from "lucide-react";

const ProductsGrid = () => {

    const {
        products,
        loading,
        search,
        category,
        sortBy,
    } = useContext(SkyMart);

    let filteredProducts = [...products];

    // Search
    filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

    // Category
    if (category !== "all") {
        filteredProducts = filteredProducts.filter(
            (product) => product.category === category
        );
    }

    // Sorting
    switch (sortBy) {
        case "low":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;

        case "high":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;

        case "rating":
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;

        default:
            break;
    }

    if (loading) {
        return (
            <h1 className="text-center text-white text-2xl mt-10">
                Loading Products...
            </h1>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductsGrid;