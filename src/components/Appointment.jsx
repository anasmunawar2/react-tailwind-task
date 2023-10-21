import Client from "../assets/icons/userOnline.svg";
import { Clients } from "../constants";
import Chevron from "../assets/icons/chevronDown.svg";

const Appointment = () => {
  return (
    <div>
      <p className="text-2xl font-semibold text-dark-blue">
        Today’s Appointments
      </p>
      {Clients.map((item, index) => (
        <>
          <div
            className="bg-dark-blue rounded-2xl mt-5 shadow-lg w-[399.689px] h-[110.896px]"
            key={index}
          >
            <div className="flex">
              {/* Left side - Image */}
              <div className="w-1/4 pt-4 pl-3">
                <img
                  src={item.src}
                  alt="Menicure"
                  className="w-[73.931px] h-[73.931px] object-contain rounded-lg"
                />
              </div>
              {/* Center - Time, Title, and Name */}
              <div className="w-1/2 pt-4">
                <div className="text-xs font-light text-gray-background mb-2">
                  {item.time}
                </div>
                <div className="text-lg font-medium text-gray-background mb-2">
                  {item.title}
                </div>
                <div className="text-xs font-light text-gray-background flex items-center">
                  <img
                    src={Client}
                    alt="client"
                    className="w-[12.707px] h-[12.707px] mr-1"
                  />{" "}
                  {item.name}
                </div>
              </div>
              {/* Right side - Date */}
              <div className="w-1/6 mt-5 ml-8">
                <div className="text-8xl text-gray-background font-medium">
                  13
                </div>
                <p className="text-xs font-light text-gray-background ml-1">
                  July
                </p>
              </div>
            </div>
          </div>
        </>
      ))}
      <div className="flex items-center justify-center mt-4">
        <img src={Chevron} alt="chevron" className="w-[31px] h-[31px]" />
      </div>
    </div>
  );
};

export default Appointment;
