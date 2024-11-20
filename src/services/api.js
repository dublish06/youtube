import axios from "axios";

const apiClient = axios.create({
  baseURL: "YOUR_RAPID_API_ENDPOINT",
  headers: {
"e4ffe98539msh6ea6fcc22f7fdf4p18df44jsn9d3e7796b6cb": process.env.REACT_APP_RAPID_API_KEY,
  },
});

export const fetchDownloadLink = async (url, format) => {
  const response = await apiClient.get("/", { params: { url, format } });
  return response.data.download_url;
};
