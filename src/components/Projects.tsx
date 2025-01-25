import data from 'lib/projects.json';

interface ProjectsProps {
  id: string;
  title: string;
  url: string;
  color: string;
}

const Projects = () => {
  const projectList: ProjectsProps[] = data;
  return (
    <div className='max-w-5xl p-8 md:p-16'>
      <p className='text-base md:text-xl text-white/60 mb-2'>Selected Work</p>
      {projectList.map((project, index) => {
        return (
          <div key={index} className='project-item mb-2 md:mb-3'>
            <a
              className={`text-4xl md:text-5xl lg:text-8xl font-medium ${project.color}`}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              {project.title}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
