type Source = {
  tagsList: string[];
  type: string;
  num: string;
  notes: string;
  data?: Date;
}
interface Window {
  store: {
    tagList: datas[];
    createTag: (name: string) => void; 
    removeTag: (id: string) => boolean;
    updateTag: (id: string, name: string) => 'success' | 'duplicated';
    recordList: Source[];
    createSource: (source: Source) => void;
  };
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