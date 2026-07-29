import Navbar from "../components/Navbar";
import ProductsGrid from "../components/ProductsGrid";
import ProductsHeader from "../components/ProductsHeader";
import SearchFilter from "../components/SearchFilter";

const Products = () => {
  return (
    <div className="bg-[#111111]">
      <Navbar />
      <ProductsHeader />
      <SearchFilter />
      <ProductsGrid />
    </div>
  );
};

export default Products;