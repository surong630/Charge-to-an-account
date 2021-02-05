type Source = {
  tagsList: string[];
  type: string;
  num: string;
  notes: string;
  data?: Date;
}
interface Window {
  tagList: datas[];
  createTag: (name: string) => void; 
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'duplicated';
}
type datas = {
  id: string;
  name: string;
}
type TagListModel = {
  data: datas[];
  fetch: () => datas[];
  create: (name: string) => 'success' | 'duplicated';
  save: () => void;
  update: (id: string,name: string) => 'success' | 'duplicated';
  remove: (id: string) => true;
}