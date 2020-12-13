import axios, { AxiosResponse } from "axios";

const rootUrl = "http://localhost:3000/users";

axios.get(rootUrl).then((response: AxiosResponse) => {
  console.log(response.data);
});
