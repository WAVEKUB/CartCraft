import ProductImages from "@/components/ProductImages";
import CustomizeProducts from "@/components/CustomizeProducts";
import Add from "@/components/Add"

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      <div className="w-full lg:w-1/2 lg:sticky lg:top-20 h-max">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          A repellendus ea ducimus, saepe sint modi eligendi repudiandae officiis in cupiditate est, 
          voluptatem eos doloribus eveniet eaque maiores? Unde, culpa qui!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h2 className="font-medium text-2xl ">$39</h2>
        </div>
        <div className="h-[2px] bg-gray-100"/>
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100"/>
        <div className="">
          <h4 className="">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Porro illum laborum exercitationem, repellendus ipsum consectetur. 
            Suscipit totam praesentium nulla corrupti in culpa ratione. 
            Pariatur temporibus enim numquam distinctio quam deserunt!
          </p>
        </div>
        <div className="">
          <h4 className="">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Porro illum laborum exercitationem, repellendus ipsum consectetur. 
            Suscipit totam praesentium nulla corrupti in culpa ratione. 
            Pariatur temporibus enim numquam distinctio quam deserunt!
          </p>
        </div>
        <div className="">
          <h4 className="">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Porro illum laborum exercitationem, repellendus ipsum consectetur. 
            Suscipit totam praesentium nulla corrupti in culpa ratione. 
            Pariatur temporibus enim numquam distinctio quam deserunt!
          </p>
        </div>
      </div>
    </div>
  );
};
export default SinglePage;
