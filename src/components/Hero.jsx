import Appointment from "../assets/icons/calenderWhite.svg";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <section>
      <div className="p-4 md:flex md:justify-between">
        <div className="md:drop-shadow-xl">
          <p className="text-4xl text-dark-gray font-light">
            Good Morning,{" "}
            <strong className="font-semibold">Bella Famina</strong>
          </p>
        </div>
        <button className="bg-dark-blue text-white text-xl md:text-3xl font-semibold rounded-lg w-[259.792px] h-[58px] flex items-center">
          <img
            src={Appointment}
            alt="calendar"
            className="w-8 h-8 md:w-29 md:h-29 mx-4 md:mx-4"
          />
          New Appointment
        </button>
      </div>
      <HeroCard />
    </section>
  );
};

export default Hero;
