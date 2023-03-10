import React, { useEffect, useCallback, useState, useContext } from "react";
import styles from "./home.module.scss";
import Card from "../card/card";
import { fetching } from "../../../fetching";
import Catetory from "../../catetory/catetory";
import Navbar from "../../navbar/nav";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../../redux/isOpen";
import axios from "axios";
import Category from "../../../useContext/category";

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [amount, setAmount] = useState(24);
  const categories = useContext(Category);

  useEffect(() => {
    if (categories?.category) {
      setLoading(true);
      axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD-v4aovGIGZ3M1F2BDtgsbhifI3rnOPgY&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=${categories.category}&maxResults=${amount}`
        )
        .then((res) => {
          setData(res.data.items) 
        })
        .then(() => {
          setLoading(false);
        });
      }
  }, [categories?.category,amount]);

  const handleView = (v) => {
    let view = v;
    let newView = "";
    if (view.length > 6 && view.length < 10) {
      newView = view.slice(0, view.length - 6) + " Tr lượt xem";
    }
    if (view.length > 3 && view.length < 7) {
      newView = view.slice(0, view.length - 3) + " N lượt xem";
    }
    return newView;
  };

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

  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.isOpen);

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

  window.addEventListener("scroll", (event) => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
    if (clientHeight + scrollTop >= scrollHeight)
      setAmount((prev) => prev + 10);
  });

  const [nav, setNav] = useState(false);
  const handleDuration = (v) => {
    const moment = require("moment");

    const d = moment.duration(v);
    return `${d.hours()}:${d.minutes()}:${d.seconds()}`;
  };
  return (
    <>
      <Catetory />
      {!nav ? <Navbar /> : null}
      <div className={isOpen.value ? styles.container : styles.abc}>
        {data?.map((value, index) => {
          return (
            <div
              className={isOpen.value ? styles.link : styles.link2}
              key={index}
            >
              <Card
                img={value.snippet.thumbnails.medium.url}
                avatar={value.snippet.thumbnails.default.url}
                title={value.snippet.title}
                view={handleView(value.statistics.viewCount)}
                channel={value.snippet.channelTitle}
                time={handleTime(value.snippet.publishedAt)}
                id={value.id}
                loading={loading}
                setLoad={setLoading}
                Channel={value.snippet.channelId}
                idd={value.id}
                duration={handleDuration(value.contentDetails.duration)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
