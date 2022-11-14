import { fetchAPI } from '../lib/fetch-client';
import { getAllProjects } from '../lib/query/pages.data';
import ProjectGallery from '../src/components/ProjectGallery/ProjectGallery';

interface ProjectsInterface {
  allProjects: {
    nodes: {
      title: string;
    }[]
  }
}

export default async function Page() {
  const { allProjects: { nodes: projects } } = await fetchAPI(getAllProjects) as ProjectsInterface;

  return (
    <ProjectGallery projects={projects} />
  );
}
