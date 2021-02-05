let id: number = parseInt(localStorage.getItem('_id') || '0') || 0;
function createId() {
  id++;
  localStorage.setItem('_id', id.toString())
  return id
}
export default createId