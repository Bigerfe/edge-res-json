import response from "../common/response";
import axios from "axios";
export const config = {
  runtime: 'edge',
}
export default async function handler(req) {
  const DataList: Array<any> = [];
  // 发起一个post请求
  axios({
    method: 'post',
    url: 'http://bigerfe.com',
    data: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
  for(let i=0;i<100;i++){
    DataList.push({
      id: i,
      name: `menuname ${i}`
    })
  }
  return response(DataList);
}
