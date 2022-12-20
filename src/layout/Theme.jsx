import React,{useState,useEffect,useCallback} from 'react'
import styles from './Theme.module.scss'
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from '../component/content/card/card'
import Catetory from "../component/catetory/catetory";
import Navbar from "../component/navbar/nav"; 
import { useSelector } from 'react-redux';

function Theme() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const isOpen=useSelector(state=>state.isOpen)
    useEffect(() => {
      setLoading(true)
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyD-v4aovGIGZ3M1F2BDtgsbhifI3rnOPgY&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=${id}&maxResults=20`
        )
        .then((res) => {
          setData(res.data.items);
        })
        .then(()=>{
          setLoading(false)
        })
      if (data) {
        const Data = data?.map((item) => {
          if (item?.snippet.title.includes(id)) return item;
        });
        setData(Data);
      }
    }, [id]);
    const handleTime =useCallback( (v) => {
        let time = v;
        let newTime =
          (Date.parse(time) - Date.parse(new Date(v?.slice(0, 10)))) / 100 / 60 / 60;
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
      },[])
  return (
    <>
    <Catetory/>
    <Navbar/>
    <div className={isOpen.value?styles.container:styles.abc}>
    {data?.map((value, i) => {
      return (
          <div className={isOpen.value?styles.link:styles.link2} key={i}>
            <Card
              img={value?.snippet.thumbnails.medium.url}
              avatar={value?.snippet.thumbnails.default.url}
              title={value?.snippet.title}
              channel={value?.snippet.channelTitle}
              time={handleTime(value?.snippet.publishedAt)}
              id={value?.id.videoId}
              loading={loading}
              setLoad={setLoading}
              idd={value?.id.videoId}
              Channel={value?.snippet.channelId}
            />
          </div>
      );
    })}
  </div>
    </>
  )
}

export default Theme