import { fetchAPI } from '../lib/fetch-client';
import { getAllProjects } from '../lib/query/pages.data';

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
    <ul>
      {projects.map(({ title }, index) => (
        <li key={index}>{title}</li>
      ))}
    </ul>
  );
}
