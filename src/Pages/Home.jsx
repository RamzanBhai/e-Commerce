import { Categories, mockData } from "../assets/mockData";
import HeroImages from "../assets/Images/hero-page.png";
import InfoSection from "../Components/InfoSection";
import CategorySection from "../Components/CategorySection";
import ProductCard from "../Components/ProductCard";
import Shop from "./Shop";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const search = useSelector(state => state.search.search)
  const topProducts = mockData
    .slice(0, 5)
    .filter(product => product.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto flex flex-col gap-4 py-4 md:flex-row">
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border  rounded-full mr-2 "></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mt-4 h-72 w-full md:mt-0 md:h-96 md:w-9/12">
            <img src={HeroImages} alt="" className="h-full w-full" />
            <div className="absolute left-4 top-10 sm:left-8 sm:top-16">
              <p className="mb-4"> Ramzan | e-Shop</p>
              <h2 className="text-2xl font-bold sm:text-3xl">WELCOME TO E-SHOP</h2>
              <p className="mt-2.5 text-lg font-bold sm:text-xl">
                MILLIONS+PRODUCTS
              </p>
              <Link
                to="/shop"
                className="mt-4 inline-block transform bg-red-600 px-8 py-1.5 text-white transition-transform duration-300 hover:scale-105 hover:bg-red-700"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
        <InfoSection />
        <CategorySection />
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          {topProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 cursor-pointer sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
              {topProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-8 text-center text-gray-500">
              No products found for &quot;{search}&quot;.
            </p>
          )}
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
