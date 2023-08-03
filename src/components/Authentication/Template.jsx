import Header from "../Navigation/Header";
import cover from "../../assets/media/images/auth/cover.png";

const Template = ({ children }) => {
  return (
    <div className="h-screen">
      <Header />
      <div id="authTemplate" className="md:flex">
        <div className="w-full md:w-1/2 h-full px-10 md:pl-40">{children}</div>
        <div
          className=" hidden md:inline-block md:w-1/2 h-full bg-cover bg-center bg-no-repeat bg-origin-content"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
      </div>
    </div>
  );
};

export default Template;
