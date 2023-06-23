import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletenCard = ({ cardNumbers }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-6 gap-y-6">
      {Array(cardNumbers)
        .fill(0)
        .map((item, index) => {
          return (
            <div key={index}>
              <Skeleton style={{ height: "200px" }} />
              <Skeleton style={{ height: "24px", marginTop: "10px" }} />
              <Skeleton style={{ height: "36px", marginTop: "15px" }} />
            </div>
          );
        })}
    </div>
  );
};

export default SkeletenCard;
