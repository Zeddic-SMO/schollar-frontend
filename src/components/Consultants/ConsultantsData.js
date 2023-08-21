import Darrell from "../../assets/media/icons/Home/Consultants/Darrel.png";
import Esther from "../../assets/media/icons/Home/Consultants/Esther.png";
import Jerome from "../../assets/media/icons/Home/Consultants/Jerome.png";
import Ralph from "../../assets/media/icons/Home/Consultants/Ralph.png";

export const ConsultantsInfo = [
  {
    id: 1,
    name: " Darrell Steward",
    pic: Darrell,
    location: "New York, USA",
    specialization: ["Admssions", "Scholarships", "Visa", "Loan"],
    reviews: [
      {
        studentName: "Jane Cooper",
        text: "Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque. Massa nec varius arcu odio turpis felis a, eget leo.",
      },
      {
        studentName: "John Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
      },
      {
        studentName: "Peter Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
      },
    ],
    stars: 3,
    charges: [{ fifteenMins: "$10" }, { thirtyMins: "$10" }],
  },
  {
    id: 2,
    name: "Esther Howard",
    pic: Esther,
    location: "Canada",
    specialization: ["Admssions", "Scholarships", "Visa"],
    reviews: [
      {
        studentName: "Jane Cooper",
        text: "Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque. Massa nec varius arcu odio turpis felis a, eget leo.",
      },
      {
        studentName: "Alex Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
      },
    ],
    stars: 2,
    charges: [{ fifteenMins: "$20" }, { thirtyMins: "$30" }],
  },

  {
    id: 3,
    name: "Jerome Bell",
    pic: Jerome,
    location: "Atlanta, USA",
    specialization: ["Admssions", "Scholarships"],
    reviews: [
      {
        studentName: "Jane Cooper",
        text: "Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque. Massa nec varius arcu odio turpis felis a, eget leo.",
      },
      {
        studentName: "Alex Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
      },
    ],
    stars: 2,
    charges: [{ fifteenMins: "$20" }, { thirtyMins: "$30" }],
  },
  {
    id: 4,
    name: " Ralph Edwards",
    pic: Ralph,
    location: "UK",
    specialization: ["Admssions", "Scholarships", "Visa", "Loan"],
    reviews: [
      {
        studentName: "Jane Cooper",
        text: "Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque. Massa nec varius arcu odio turpis felis a, eget leo.",
      },
      {
        studentName: "Alex Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
      },
      {
        studentName: "Paul Cooper",
        text: "Tristique odio at dignissim viverra aliquet eleifend erat. Tellus, at arcu, egestas praesent. Varius aliquet pharetra adipiscing tincidunt orci nec neque. Massa nec varius arcu odio turpis felis a, eget leo.",
      },
      {
        studentName: "Zed Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
      },
    ],
    stars: 4,
    charges: [{ fifteenMins: "$25" }, { thirtyMins: "$30" }],
  },
];
