type Source = {
  tagsList: string[];
  type: string;
  num: string;
  notes: string;
  data?: Date;
}
interface Window {
  tagList: datas[];
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
  remove: (id: string) => 'success';
}