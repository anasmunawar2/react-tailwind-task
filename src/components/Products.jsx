import Chevron from "../assets/icons/arrowDown.svg";
import { ProductDetail } from "./../constants/index";

const Products = () => {
  return (
    <div className="bg-white rounded-3xl w-[430.077px] h-[377.628px] shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-3xl font-semibold text-dark-gray">
            Top Products
          </h2>
        </div>
        <div className="text-right flex items-center">
          <h2 className="text-base text-light-gray font-normal">This Month</h2>
          <img src={Chevron} alt="arrow" />
        </div>
      </div>
      <ul className="items-center ">
        {ProductDetail.map((item, id) => (
          <li
            key={id}
            className={`flex items-center border-b border-light-gray pb-4 mt-4 ${
              id === 2 ? "opacity-50" : "opacity-100"
            }`}
          >
            <img
              src={item.src}
              alt="Product Image"
              className="w-[65.56px] h-[65.56px] object-cover"
            />
            <div className="ml-4">
              <h2 className="text-3xl font-medium text-text-color">
                {item.title}
              </h2>
              <p className="text-lg font-normal text-gray-text">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
