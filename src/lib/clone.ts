function clone(data: Source) {
  return JSON.parse(JSON.stringify(data))
}
export default clone