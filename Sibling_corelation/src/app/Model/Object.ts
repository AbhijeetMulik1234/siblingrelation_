export interface MyComplexObject {
  id: number;
  name: string;
  details: {
    description: string;
    tags: string[];
  };
}
