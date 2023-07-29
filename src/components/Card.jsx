import { useEffect } from "react";
const Card = ({ project }) => {
  useEffect(() => {
    console.log(project);
  }, []);
  return (
    <div className="card">
      <img src={project.image} alt="placeholder" />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
      <div className="btnContainer">
        <a className="viewBtn" href={project.live}>
          View
        </a>
        <a href={project.code} className="codeBtn">
          Code
        </a>
      </div>
    </div>
  );
};

export default Card;
