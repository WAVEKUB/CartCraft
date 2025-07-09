import Slider from "@/components/Slider"
import ProductList from "@/components/ProductList"
import CategoryList from "@/components/CategoryList";


const page = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Tech Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Tech Categories</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-5 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Latest Tech Releases</h1>
        <ProductList />
      </div>
    </div>
  )
}
export default page