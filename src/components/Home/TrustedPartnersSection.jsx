import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import partner1 from "../../assets/media/logo/partners/partner1.png";
import partner2 from "../../assets/media/logo/partners/partner2.png";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <img src={partner1} onDragStart={handleDragStart} role="presentation" />,
  <img src={partner2} onDragStart={handleDragStart} role="presentation" />,
  <img src={partner1} onDragStart={handleDragStart} role="presentation" />,
  <img src={partner2} onDragStart={handleDragStart} role="presentation" />,
  <img src={partner1} onDragStart={handleDragStart} role="presentation" />,
];

const TrustedPartnersSection = () => {
  return (
    <div className="px-10 md:px-40 py-10 md:py-16">
      <h1 className="py-10 font-ManropeExtraBold text-center text-[25px] md:text-[35px]">
        Trusted by Leading Universities & Companies
      </h1>

      <div className="">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls={true}
          autoPlay={true}
          autoPlayInterval={400}
          responsive={responsive}
        />
      </div>
    </div>
  );
};

export default TrustedPartnersSection;
