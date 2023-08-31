import CAT from "../../assets/media/icons/Home/CATbtn.png";

import { ConsultantsInfo } from "./ConsultantsData";
import Consultant from "./Consultant";

const ExperiencedConsultants = () => {
  return (
    <div className="px-10 md:px-40 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center py-10 ">
        <h1 className="font-ManropeExtraBold text-center md:text-left text-[25px] md:text-[35px]">
          Experienced Consultants
        </h1>
        <span>
          <img
            src={CAT}
            alt="call to action"
            className="shadow-lg cursor-pointer"
          />
        </span>
      </div>

      <div className="flex gap-5 justify-center flex-wrap">
        {ConsultantsInfo?.map((consultant) => {
          return <Consultant consultant={consultant} key={consultant.id} />;
        })}
      </div>
    </div>
  );
};

export default ExperiencedConsultants;
