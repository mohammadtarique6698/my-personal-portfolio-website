import React from "react";

const achievements = [
  {
    title:
      "Insta RISE Award: Recognized by the Team Manager for best contributions to work",
  },
  {
    title:
      "Secured 9 out of 12 badges on GeekTrust platform. Achieved Gold Membership",
  },
  {
    title: "Currently on top 1% in Infosys. (DQ: 130 pts)",
  },
];

const Achievements = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border border-[#33353F] rounded-md py-8 px-17 flex flex-row items-center justify-between">
        {achievements.map((ele, ind) => {
          return (
            <div className="flex flex-col justify-center mx-4" key={ind}>
              <p className="text-white text-2xl font-bold">{ele.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
