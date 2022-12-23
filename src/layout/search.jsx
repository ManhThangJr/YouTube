import React, { useEffect, useState, useCallback } from "react";
import styles from "./search.module.scss";
import {  useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Catetory from "../component/catetory/catetory";
import Nav from "../component/navbar/nav";
import { TiTickOutline } from "react-icons/ti";

function Search() {

  const [query,]  = useSearchParams()
  const [data, setData] = useState();
  
  console.log(query.get('search_query'))
  useEffect(() => {
    axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCd0swP7k-d0rWWPQ_NKsYnH8buvMM2F3Q&part=snippet&type=video&maxResults=5&q=${query.get('search_query')}`
      )
      .then((res) => {
        setData(res.data.items);
      });
    }, [query]);

  const handleTime = useCallback((v) => {
    let time = v;
    let newTime =
      (Date.parse(time) - Date.parse(new Date(v?.slice(0, 10)))) /
      100 /
      60 /
      60;
    let check = 0;
    let day = 0;
    let month = 0;
    let year = 0;
    if (newTime > 24) {
      day = Math.round(newTime / 24);
      if (day > 30) {
        month = Math.round(day / 30);
        check += 1;

        if (month > 12) {
          year = Math.round(month / 12);
          check += 1;
        }
      }
    }
    if (check === 2) return year + " năm trước";
    if (check === 1) return month + " tháng trước";
    if (check === 0) return day + " ngày trước";
  }, []);

  const nav = useNavigate();
  return (
    <>
      <Catetory />
      <Nav />
      <div className={styles.container}>
        {data?.map((value, i) => {
          return (
            <div
              className={styles.wrapper}
              key={i}
              onClick={() => nav(`/detail/${value?.id.videoId}`)}
            >
              <div className={styles.imgs}>
                <iframe
                  className={styles.img}
                  src={`https://www.youtube.com/embed/${value?.id.videoId}?autoplay=1&&clipboard-write&autoplay=1`}
                  allowFullScreen
                  alt=""
                />
              </div>
              <div className={styles.right}>
                <div className={styles.title}>{value?.snippet.title}</div>
                <div className={styles.view}>
                  {handleTime(value?.snippet.publishedAt)}
                </div>
                <div className={styles.channel}>
                  <div>
                    <img
                      style={{
                        height: "25px",
                        width: "25px",
                        borderRadius: "50%",
                      }}
                      src={value?.snippet.thumbnails.default.url}
                    />
                  </div>
                  <span>{value?.snippet.channelTitle}</span>
                  <span>
                    <TiTickOutline />
                  </span>
                </div>
                <div className={styles.des}>
                  <p>{value?.snippet.description}</p>
                </div>
                <div className={styles.new}>Mới</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Search;
