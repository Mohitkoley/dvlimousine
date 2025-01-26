import  {useState} from 'react';
import FleetSlider from "../../../helpers/FleetSlider/FleetSlider";

const Fleets = () => {
  const [filter] = useState('All');
  return (
    <section id="Fleets" className={`FleetContainer p-6 h-full w-11/12 m-auto my-6 rounded-xl relative`}>
      <div className="FleetHeading text-gradient font-lora lg:text-6xl text-4xl text-center">Our Fleet</div>
      <div className='text-white text-center w-full py-6 p-2'>
      We understand that every event is unique, and we strive to accommodate your individual needs.
      </div>
      <div className="FleetSlider w-full mt-8">
        <FleetSlider filter={filter} />
      </div>
    </section>
  );
};

export default Fleets;
