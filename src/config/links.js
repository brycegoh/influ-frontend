let API_ENDPOINT;

switch (process.env.NODE_ENV) {
  case "development":
    console.log(process.env.NODE_ENV);
    API_ENDPOINT = "http://localhost:5000/api";
    break;

  default:
    break;
}

export { API_ENDPOINT };
