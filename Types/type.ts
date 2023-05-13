export type TDescription = {
  text: string;
  keywords: string[] | [];
};

export type TTechnology = {
  technology: string[];
};

export interface IWorkProject extends TTechnology {
  linkApp: string;
  image: string;
  name: string;
  description: string;
  linkCode: string;
}
