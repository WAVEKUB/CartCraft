import Image from "next/image"
import Filter from "@/components/Filter";
import ProductList from "@/components/ProductList";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* CAMPAIGN*/}
      <div className="hidden bg-blue-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Get up to 40% off on
            <br /> Premium Tech Products</h1>
          <button className="rounded-4xl bg-craftcart text-white w-max py-3 px-5 text-sm">Shop Now</button>
        </div>
        <div className="relative w-1/3 bottom-3">
          <Image src="/tech-product.png" alt="Tech Products" fill className="object-contain " />
        </div>
      </div>

      {/* FILTER */}
      <Filter />
      {/* PRODUCTS */}
      <h1 className="mt-12 text-xl font-semibold">Tech Products For You!</h1>
      <ProductList />
    </div>
  );
};
export default ListPage