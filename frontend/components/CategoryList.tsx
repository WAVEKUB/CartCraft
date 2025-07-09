import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  const techCategories = [
    {
      id: 1,
      name: "Laptops",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop"
    },
    {
      id: 2,
      name: "Smartphones",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop"
    },
    {
      id: 3,
      name: "Audio & Headphones",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
    },
    {
      id: 4,
      name: "Gaming",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=500&fit=crop"
    },
    {
      id: 5,
      name: "Smart Home",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop"
    },
    {
      id: 6,
      name: "Wearables",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
    }
  ];

  return (
    <div className="px-4 overflow-x-scroll ">
        <div className="flex gap-4 md:gap-8">
            {techCategories.map((category) => (
              <Link href={`/list?cat=${category.name.toLowerCase()}`} key={category.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:/w-1/6">
                  <div className="relative bg-slate-100 w-full h-96">
                      <Image 
                          src={category.image} 
                          alt={category.name} 
                          fill 
                          sizes="20vw" 
                          className="object-cover"
                      />
                  </div>
                  <h1 className="mt-8 font-light text-clip tracking-wide">{category.name}</h1>
              </Link>
            ))}
        </div>
    </div>
  );
};
export default CategoryList;
