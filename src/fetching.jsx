import axios from "axios";

export const fetching = async (amount) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDbOfLhWIQJFExk4AYMD5d1zYN6Gve90Bc&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=VN&maxResults=${amount}`
  );
  return data;
};
