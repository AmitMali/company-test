import React from "react";
import { useParams } from "react-router-dom";

import { cleanedArrayToString } from "../utils/arrayUtil";
import { pholioItems } from "../data/portpholioData";
const PortpholioDetail = () => {
  const { pholioId } = useParams();
  const pholio = pholioItems.filter(
    (pholio) => Number(pholio.id) === Number(pholioId)
  )[0];
  console.log(pholioId, pholio);
  return (
    <div>
      <div className="container">
        <div className="">
          <img className="card-img-top2" src={pholio.img} alt={pholio.name} />
          <h1>{pholio.title}</h1>
          <p>{pholio.description}</p>
          <p>tags :{cleanedArrayToString(pholio.tag)}</p>
        </div>
      </div>
    </div>
  );
};

export default PortpholioDetail;
