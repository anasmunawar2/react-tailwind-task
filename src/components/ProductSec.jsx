import Members from "./Members";
import Products from "./Products";

const ProductSec = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-20 mt-10">
      <Products className="w-full sm:w-1/2" />
      <Members className="w-full sm:w-1/2" />
    </div>
  );
};

export default ProductSec;
