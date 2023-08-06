export interface Trip {
  _id: string, // internal MongoDB primary key
  code: string,
  name: string,
  perPerson: string,
  start: string,
  resort: string,
  length: string,
  image: string,
  description: string
 }