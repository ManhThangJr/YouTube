import axios from "axios";

export const fetching = async (amount) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD-v4aovGIGZ3M1F2BDtgsbhifI3rnOPgY&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=HK&maxResults=${amount}`
  );
  return data;
};
