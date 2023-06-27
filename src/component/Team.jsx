import { useState } from "react";
import { Link } from "react-router-dom";
import { peoples } from "../data/peoplesData";
import { cleanedArrayToString } from "../utils/arrayUtil";
const Team = () => {
  const designations = [
    "All",
    "Web Designer",
    "UI Designer",
    "Software Developer",
    "System Designer",
    "Full stack Developer",
  ];
  const locations = ["All", "london", "india", "australia"];
  const titles = ["All", "Founders", "Partners"];

  const [team, setTeam] = useState(peoples);
  const [designation, setDesignation] = useState("All");
  const [title, setTitle] = useState("All");
  const [location, setLocation] = useState("All");

  const updateDesignation = (tag) => {
    setDesignation(tag);
    const updatedPeople = peoples.filter(
      (item) =>
        item.designation.includes(designation) &&
        item.location.includes(location) &&
        item.title.includes(title)
    );
    setTeam(updatedPeople);
  };
  const updateLocation = (tag) => {
    setLocation(tag);
    const updatedPeople = peoples.filter(
      (item) =>
        item.designation.includes(designation) &&
        item.location.includes(location) &&
        item.title.includes(title)
    );
    setTeam(updatedPeople);
  };
  const updateTitle = (tag) => {
    setTitle(tag);
    const updatedPeople = peoples.filter(
      (item) =>
        item.designation.includes(designation) &&
        item.location.includes(location) &&
        item.title.includes(title)
    );
    setTeam(updatedPeople);
  };

  return (
    <div>
      <div className="container">
        <h1>Awesome Team</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="container">
        <div className="d-flex flex-row">
          <div className="me-2">
            <p className="">Designation</p>
            <select
              name=""
              id=""
              onChange={(e) => updateDesignation(e.target.value)}
              className="btn btn-primary btn-sm w-full"
            >
              {designations.map((designation, i) => {
                return (
                  <option key={i} value={designation}>
                    {designation}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="me-2">
            <p className="">Location</p>
            <select
              name=""
              id=""
              onChange={(e) => updateLocation(e.target.value)}
              className="btn btn-primary btn-sm w-full"
            >
              {locations.map((location, i) => {
                return (
                  <option key={i} value={location}>
                    {location}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="me-2">
            <p className="">Title</p>
            <select
              name=""
              id=""
              onChange={(e) => updateTitle(e.target.value)}
              className="btn btn-primary btn-sm w-full"
            >
              {titles.map((title, i) => {
                return (
                  <option key={i} value={title}>
                    {title}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {team.map((person, i) => {
            return (
              <Link to={`/team/${person.id}`}>
                <div className="col-4">
                  <div className="card-body2">
                    <img className="card-img-top2" src={person.image} alt="" />
                    <h3 className="card-heading2">{person.name}</h3>
                    <p className="text-secondary-emphasis">
                      {cleanedArrayToString(person.designation)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
