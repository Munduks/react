import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
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
    <div>
      <div>
        <h2>{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} />
        <p>{project.description}</p>
        <p>{project.client}</p>
        <p>Pradėta:{project.startingDate}</p>
        <p>Pabaigta:{project.endingDate}</p>
      </div>
      <div className="project-button">
        <Link className={"styled-button button-possition"} to={PROJECTS_ROUTE}>
          Back to projects
        </Link>
      </div>
    </div>
  );
};

export default Project;
