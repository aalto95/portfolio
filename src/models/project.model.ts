export interface ProjectModel {
  id: number;
  name: string;
  img: string;
  info: string;
  source: string;
  address: string;
  technologies: {
    id: number;
    name: string;
  }[];
}
