import axios from "axios";

export async function axiosFake() {
  return await axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.data);
}