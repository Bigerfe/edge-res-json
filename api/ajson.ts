import response from "../common/response";
export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const DataList: Array<any> = [];
  for(let i=0;i<100;i++){
    DataList.push({
      id: i,
      name: `menuname ${i}`
    })
  }

  return response(DataList);
}
