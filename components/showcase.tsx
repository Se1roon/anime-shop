import React from "react";
import Record from "pocketbase";

interface ShowcaseProps {
  records: {
    id: string;
    name: string;
    path_to_image: string;
    price: number;
    rating: number;
    sizes: string;
  }[];
}

const Showcase: React.FC<ShowcaseProps> = ({ records }): JSX.Element => {
  return (
    <>
      <div></div>
      {records.map((record) => (
        <div key={record.id}>
          <h1>{record.name}</h1>
          <h2>{record.price}</h2>
        </div>
      ))}
    </>
  );
};

export default Showcase;
