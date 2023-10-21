import Appointment from "./Appointment";
import CalendarComponent from "./Calender";

const AppointSection = () => {
  return (
    <section className="flex flex-col sm:flex-row justify-center gap-20 mt-10">
      <div className="w-full sm:w-1/2 flex items-center justify-end mr-10">
        <CalendarComponent />
      </div>
      <div className="w-full sm:w-1/2 flex items-center justify-between">
        <Appointment />
      </div>
    </section>
  );
};

export default AppointSection;
