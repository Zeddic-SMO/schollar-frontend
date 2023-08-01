import { Mail } from "react-feather";
import arrow from "../../assets/media/images/consultants/arrows.png";

const DontMissAnything = () => {
  return (
    <div className="relative bg-BrandGray100 px-10 md:px-40 py-16 flex justify-center">
      <div>
        <h1 className="font-ManropeExtraBold text-center md:text-left text-[25px] md:text-[35px]">
          Don't Want to Miss Anything?
        </h1>

        <span className="hidden md:block absolute right-[360px] top-[70px]">
          <img src={arrow} alt="arrow" />
        </span>

        <div className="flex flex-col md:flex-row gap-2 md:gap-12 py-7">
          <h5 className="font-ManropeExtraBold text-center md:text-left">
            Sign up for <br /> Newsletters
          </h5>
          <div className="text-[14px] font-ManropeRegular text-BrandGray700">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Daily_Newsletter"
                value="Daily Newsletter"
              />
              <label htmlFor="Daily_Newsletter">Daily Newsletter</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Daily_Newsletter"
                value="Daily Newsletter"
              />
              <label htmlFor="Daily_Newsletter">Daily Newsletter</label>
            </div>
          </div>

          <div className="text-[14px] font-ManropeRegular text-BrandGray700">
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="Advertising_Updates"
                value="Advertising Updates"
                checked
              />
              <label htmlFor="Advertising_Updates">Advertising Updates</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="Opportunities" value="Opportunities" />
              <label htmlFor="Opportunities">Opportunities</label>
            </div>
          </div>

          <div className="text-[14px] font-ManropeRegular text-BrandGray700">
            <div className="flex items-center gap-3">
              <input type="checkbox" id="review" value="Week in Review" />
              <label htmlFor="review">Week in Review</label>
            </div>
            <div className="flex items-center gap-3">
              <input type="checkbox" id="Podcasts" value="Podcasts" />
              <label htmlFor="Podcasts">Podcasts</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-5 py-5">
          <div className="items-center inline-flex bg-white shadow-md rounded-lg">
            <span className="text-BrandGray500 px-2">
              <Mail size="20px" />
            </span>
            <input
              type="email"
              placeholder="Your Email"
              className="font-ManropeRegular p-2 rounded-l-lg outline-none text-[15px] bg-transparent w-[310px] md:w-[475px] text-BrandGray500"
            />
          </div>
          <button className="text-white bg-BrandPrimary rounded-lg py-[7px] px-5">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default DontMissAnything;
