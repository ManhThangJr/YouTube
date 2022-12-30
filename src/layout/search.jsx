import React, { useEffect, useState, useCallback } from "react";
import styles from "./search.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/navbar/nav";
import { useDispatch } from "react-redux";
import { open } from "../component/redux/isOpen";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import AddRoadIcon from "@mui/icons-material/AddRoad";
function Search() {
  const [query] = useSearchParams();
  const [data, setData] = useState();
  const [show, setShow] = useState({ index: null, check: false });

  console.log(query.get("search_query"));
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDbOfLhWIQJFExk4AYMD5d1zYN6Gve90Bc&part=snippet&type=video&maxResults=25&q=${query.get(
          "search_query"
        )}`
      )
      .then((res) => {
        setData(res.data.items);
        console.log(res.data.items[0]);
      });
  }, [query]);

  const handleTime = useCallback((v) => {
    let newTime = (Date.now() - Date.parse(new Date(v))) / 1000 / 60 / 60;
    let day = 0;
    let check = 0;
    let month = 0;
    let year = 0;
    if (newTime > 24) {
      day = Math.round(newTime / 24);
      check += 1;
      if (day > 30) {
        month = Math.round(day / 30);
        check += 1;
        if (month > 12) {
          year = Math.round(month / 12);
          check += 1;
        }
      }
    }
    if (check === 3) return year + " năm trước";
    if (check === 2) return month + " tháng trước";
    if (check === 1) return day + " ngày trước";
    if (check === 0) return Math.round(newTime) + " giờ trước";
  }, []);

  const nav = useNavigate();
  const [nav1, setNav] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1480) dispatch(open(false));
    if (window.innerWidth > 1480) dispatch(open(true));
    if (window.innerWidth < 760) setNav(true);
    if (window.innerWidth > 760) setNav(false);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1480) dispatch(open(false));
      if (window.innerWidth > 1480) dispatch(open(true));
      if (window.innerWidth < 760) setNav(true);
      if (window.innerWidth > 760) setNav(false);
    });
  }, []);
  const dispatch = useDispatch();

  const Video = ({ id, i }) => {
    return (
      <div
        className={styles.videoContainer}
        style={{ width: "400px", height: "230px" }}
      >
        <iframe
          className={styles.video}
          src={`https://www.youtube.com/embed/${id}?controls=0&modestbranding=1&showinfo=0&fs=0&autoplay=1&clipboard-write`}
          title="abc"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
          allowFullScreen
        />
      </div>
    );
  };
 
  return (
    <>
      {!nav1 ? <Navbar /> : null}
      <div className={styles.container}>
        <Button variant="elevated" sx={{ fontWeight: "bold", fontSize: "90%" }}>
          <AddRoadIcon sx={{ marginRight: "5px" }}></AddRoadIcon>Bộ lọc
        </Button>
        <hr style={{ width: "80%", marginBottom: 20 }}></hr>
        <Typography component="div" variant="h6 ">
          Tin tức hàng đầu
        </Typography>
        {data?.map((value, i) => {
          return (
            <div
              onMouseEnter={() => setShow({ index: i, check: true })}
              onMouseLeave={() => setShow({ index: i, check: false })}
              onClick={()=>nav(`/detail/${value.id.videoId}`)}
            >
              <Card
                key={i}
                className={styles.wrap}
                sx={{
                  display: "flex",
                  margin: "10px auto 40px",
                  boxShadow: "none",
                  cursor: "pointer",
                }}
              >
                {show.index === i && show.check === true ? (
                  <Video id={value.id.videoId} i={i} />
                ) : (
                  <CardMedia
                    component="img"
                    sx={{
                      width: "400px",
                      height: "230px",
                      borderRadius: "15px",
                    }}
                    image={value.snippet.thumbnails.medium.url}
                    alt="Live from space album cover"
                    className={styles.img}
                  />
                )}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "50%",
                  }}
                  className={styles.right}
                >
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      className={styles.title}
                      component="div"
                      variant="h6 "
                      sx={{ fontWeight: "bold" }}
                    >
                      {value.snippet.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="gray"
                      component="div"
                    >
                      {handleTime(value.snippet.publishedAt)}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        margin: "18px 0",
                      }}
                    >
                      <Avatar
                        src={value.snippet.thumbnails.medium.url}
                      ></Avatar>
                      <Typography
                        sx={{ marginLeft: "10px", fontWeight: "bold" }}
                      >
                        {value.snippet.channelTitle}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{ fontSize: "80%", fontWeight: "bold" }}
                      className={styles.title}
                    >
                      {value.snippet.description}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
