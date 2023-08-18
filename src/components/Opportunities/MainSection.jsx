import { opportunitiesItems } from "./OpportunitiesData";
import tag from "../../assets/media/images/opportunities/tag.png";

const MainSection = () => {
  return (
    <div className="w-[75%]">
      <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5">
        List View with Sidebar
      </h1>
      <div>
        {opportunitiesItems?.map((item) => {
          return (
            <div key={item.id}>
              <div className="flex gap-5">
                <div className="w-[45%]">
                  <img src={item.img} alt={item.title} className="rounded-md" />
                </div>
                <div className="w-[50%]">
                  <span>{item.tag}</span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <span>{item.date}</span>
                </div>
              </div>

              <div className="bg-BrandGray100 p-5 my-5 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span>{item.tag2}</span>
                  <span className="shadow-md rounded-full">
                    <img src={tag} alt="Tag" />
                  </span>
                </div>
                <h4>{item.title2}</h4>
                <p>{item.text2}</p>
                <span>{item.date2}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainSection;
