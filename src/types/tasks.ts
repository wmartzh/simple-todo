export interface TaskType {
  id: string;
  name?: string;
  done: boolean;
  rawText?: string;
  tags?: TagType[];
  time?: string;
  date?: string;
}

export interface TagType {
  id: string
  name?: string;
  color?: string;
}