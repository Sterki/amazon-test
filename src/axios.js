import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-c9ca0.cloudfunctions.net/api", // here is were we have the api cloud function URL
});

export default instance;
//https://us-central1-clone-c9ca0.cloudfunctions.net/api
//"http://localhost:5001/clone-c9ca0/us-central1/api"
