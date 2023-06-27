import React from "react";
import { useParams } from "react-router-dom";
import { peoples } from "../data/peoplesData";
import { cleanedArrayToString } from "../utils/arrayUtil";
const TeamDetail = () => {
  const { userId } = useParams();
  const person = peoples.filter(
    (people) => Number(people.id) === Number(userId)
  )[0];
  console.log(userId, person);
  return (
    <div>
      <div className="container">
        <div className="">
          <img className="card-img-top2" src={person.image} alt={person.name} />
          <h1>{person.name}</h1>
          <p>{person.detail}</p>
          <p>designation :{cleanedArrayToString(person.designation)}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
