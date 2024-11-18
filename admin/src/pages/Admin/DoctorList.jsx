
import DoctorsCard from '../../../../src/components/DoctorsCard';
import { doctors } from '../../../../src/assets/assets_frontend/assets';
import TopDoctors from './TopDoctors'

const DoctorList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
     <TopDoctors/>
    </div>
  );
};


export default DoctorList
