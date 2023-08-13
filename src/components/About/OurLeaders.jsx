import { Link } from "react-router-dom";
import Leaders from "./OurLeadersData";
import { Facebook, Linkedin, Twitter } from "react-feather";

const OurLeaders = () => {
  return (
    <div className="px-10">
      <h1 className="font-ManropeExtraBold text-[30px] md:text-[40px] py-5 text-center">
        Our Leaders
      </h1>
      <div className="flex gap-16 justify-center items-center">
        {Leaders.map((leader) => {
          return (
            <div
              key={leader.id}
              className="flex flex-col items-center gap-2 py-5"
            >
              <img src={leader.img} alt="Leader" className="rounded-full" />
              <p className="font-ManropeBold text-BrandGray900">
                {leader.name}
              </p>
              <p className="font-ManropeRegular text-[14px] text-BrandGray700">
                {leader.role}
              </p>
              <p className="flex gap-2">
                {leader.facebook && (
                  <span className="p-1 cursor-pointer rounded-sm border-[1px] border-BrandGray600 hover:bg-BrandPrimary">
                    <Link to={leader.facebook}>
                      <Facebook size="15px" />
                    </Link>
                  </span>
                )}

                {leader.twitter && (
                  <span className="p-1  cursor-pointer rounded-sm border-[1px] border-BrandGray600 hover:bg-BrandPrimary">
                    <Link to={leader.twitter}>
                      <Twitter size="15px" />
                    </Link>
                  </span>
                )}

                {leader.Linkedin && (
                  <span className="p-1 cursor-pointer rounded-sm border-[1px] border-BrandGray600 hover:bg-BrandPrimary">
                    <Link to={leader.Linkedin}>
                      <Linkedin size="15px" />
                    </Link>
                  </span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurLeaders;
