import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
import "./Project.scss";
import ProjectGeneralInfo from "./ProjectGeneralInfo.jsx";
import ProjectActions from "./ProjectActions";
import { PROJECTS_ROUTE } from "../../routes/const";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="project-container">
        <ProjectActions id={project.id} />
        <ProjectGeneralInfo project={project} />
        <div className="project-button">
          <Link
            className={"styled-button button-possition"}
            to={PROJECTS_ROUTE}
          >
            Back to Projects
          </Link>
        </div>
      </div>
    </>
  );
};

export default Project;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import Loader from "../../components/Loader/Loader";
// import { getProject } from "../../api/projects";
// import { PROJECTS_ROUTE } from "../../routes/const";
// import "../Projects/Projects.scss";

// const Project = () => {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getProject(id)
//       .then((response) => {
//         setProject(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   if (isLoading) {
//     return <Loader />;
//   }

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <div>
//       <div className="project-container">
//         <h2>{project.title}</h2>
//         <img src={project.imageUrl} alt={project.title} />
//         <div className="description-container">
//           <p>{project.description}</p>
//           <p>
//             <span>Klientas</span>: {project.client}{" "}
//           </p>
//           <p>
//             <span>Pradėta:</span> {project.startingDate}
//           </p>
//           <p>
//             <span>Pabaigta:</span> {project.endingDate}
//           </p>
//         </div>
//       </div>
//       <div className="project-button">
//         <Link className={"styled-button button-possition"} to={PROJECTS_ROUTE}>
//           Back to projects
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Project;
