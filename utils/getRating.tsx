import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function getRating(record): JSX.Element {
  const fullStars = Math.floor(record.rating);
  const stars = new Array(fullStars).fill(0);

  if (record.rating > fullStars) stars.push(1);

  return (
    <>
      {stars.map((star, index) => {
        return star ? (
          <FontAwesomeIcon key={index} icon={faStarHalf as IconProp} />
        ) : (
          <FontAwesomeIcon key={index} icon={faStar as IconProp} />
        );
      })}
    </>
  );
}
