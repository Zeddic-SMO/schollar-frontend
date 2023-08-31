import Darrell from "../../../../assets/media/icons/Home/Consultants/Darrel.png";
import Esther from "../../../../assets/media/icons/Home/Consultants/Esther.png";

const favouriteData = [
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
        date: "Aug 19, 2023",
        tag: "Admission",
      },
      {
        studentName: "John Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
        date: "Mar 9, 2023",
        tag: "Visa",
      },
      {
        studentName: "Peter Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
        date: "Jun 9, 2023",
        tag: "Scholarship",
      },
    ],
    stars: 3,
    fifteenMins: "$10",
    thirtyMins: "$20",
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
        date: "Jun 9, 2023",
        tag: "Admission",
      },
      {
        studentName: "Alex Doe",
        text: "Nunc aliquet scelerisque pellentesque imperdiet tortor elit, dictum. ",
        date: "Jun 20, 2023",
        tag: "Admission",
      },
    ],
    stars: 2,
    fifteenMins: "$15",
    thirtyMins: "$25",
  },
];

export default favouriteData;
