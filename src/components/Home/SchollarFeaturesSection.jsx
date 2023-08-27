import forum from "../../assets/media/icons/Home/Features/forum.png";
import newboard from "../../assets/media/icons/Home/Features/NewsBoard.png";
import notification from "../../assets/media/icons/Home/Features/Notification.png";
import resources from "../../assets/media/icons/Home/Features/Resources.png";
import progress from "../../assets/media/icons/Home/Features/ProgressTracking.png";
import Partners from "../../assets/media/icons/Home/Features/Partners.png";
import support from "../../assets/media/icons/Home/Features/Support.png";
import datasecurity from "../../assets/media/icons/Home/Features/DataSecurity.png";

const SchollarFeaturesSection = () => {
  return (
    <div className="px-10 md:px-40 py-10">
      <h1 className="py-10 font-ManropeExtraBold text-center text-[25px] md:text-[35px]">
        Schollar Features
      </h1>
      <div className="flex gap-4 flex-wrap justify-center items-center">
        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={forum} alt="forum" />
          <h5 className="py-3 font-ManropeBold text-[20px]">Forum</h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Collaborate with other scholars like you and share vital resources
            and information.
          </p>
        </div>

        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={newboard} alt="newboard" />
          <h5 className="py-3 font-ManropeBold text-[20px]">News Board</h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Get latest news concerning admissions, scholarship, travel, visa and
            immigration
          </p>
        </div>

        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={notification} alt="notification" />
          <h5 className="py-3 font-ManropeBold text-[20px]">Notifications</h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Receive appointment schedule reminder emails and vital Schollar
            updates
          </p>
        </div>

        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={resources} alt="Resources" />
          <h5 className="py-3 font-ManropeBold text-[20px]">Resources</h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Access premium Schollar content and features to make the process
            even easier
          </p>
        </div>

        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={progress} alt="Progress Tracking" />
          <h5 className="py-3 font-ManropeBold text-[20px]">
            Progress Tracking
          </h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Visualize every step required to achieve your goal and track
            progress
          </p>
        </div>

        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={Partners} alt="Partners" />
          <h5 className="py-3 font-ManropeBold text-[20px]">Partners</h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Schollar’s partnerships gives you access to all the resources you
            need in one place
          </p>
        </div>

        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={support} alt="Support 24/7" />
          <h5 className="py-3 font-ManropeBold text-[20px]">Support 24/7</h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Our lines are always open to provide all the assistance you need
            during this process
          </p>
        </div>

        <div className="flex flex-col items-center w-[220px] py-2 cursor-pointer">
          <img src={datasecurity} alt="Data Security" />
          <h5 className="py-3 font-ManropeBold text-[20px]">Data Security</h5>
          <p className="text-center text-[14px] text-BrandGray700 font-ManropeRegular">
            Schollar deploys top technologies to ensure your data is secure and
            safe
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchollarFeaturesSection;
