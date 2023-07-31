import { FAQData } from "./FAQData";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="px-10 md:px-40 py-10 relative">
      <div className="py-5 md:py-20 px-5 md:px-28 rounded-lg bg-BrandPrimary">
        <h1 className="py-10 font-ManropeExtraBold text-center text-white text-[25px] md:text-[35px]">
          Frequently Asked Questions
        </h1>

        {FAQData.map(({ id, title, content }) => (
          <Accordion title={title} content={content} key={id} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
