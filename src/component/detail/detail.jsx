import React, { useEffect, useState } from "react";
import styles from "./detail.module.scss";
import { useParams, Link } from "react-router-dom";
import { fetching } from "../../fetching";
import Button from "@mui/material/Button";
import Card from "../../component/content/card/card2";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReplyIcon from "@mui/icons-material/Reply";
import DownloadIcon from "@mui/icons-material/Download";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import axios from "axios";
import Comment from "./comment";

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetching().then((res) => {
      setData(res.items);
    });
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyACBuUpnysrNtpcjFql2hjmBJZD4qq6Pz8&part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=VN&id=${id}`
      )
      .then((res) => {
        setInfo(res.data.items);
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <iframe
          width="92%"
          height="720"
          src={`https://www.youtube.com/embed/${id}`}
          title="abc"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        />
        <div className={styles.under}>
          <Link>abc</Link>
          <h3>{info[0]?.snippet.localized.title}</h3>
          <div className={styles.containerCard}>
            <div className={styles.card}>
              <div className={styles.avatar}></div>
              <div>
                <h4>{info[0]?.snippet.channelTitle}</h4>
                <p>dang ki</p>
              </div>
              <button className={styles.btn}>Đăng Kí</button>
            </div>
            <div className={styles.rightCard}>
              <div>
                <ThumbUpOffAltIcon />
                <ThumbDownOffAltIcon />
              </div>
              <div>
                <ReplyIcon />
                <span>Chia sẻ</span>
              </div>
              <div>
                <DownloadIcon />
                <span>Tải xuống</span>
              </div>
              <div>
                <ContentCutIcon />
                <span>Tạo đoạn video</span>
              </div>
              <div>
                <MoreHorizIcon />
              </div>
            </div>
          </div>

          <div className={styles.desciption}>
            {info[0]?.snippet.description}
          </div>

          <Comment/>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.adv}>
            <img style={{width:'100%',borderRadius:' 10px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHhlY0J4k_8MR1wEYREDrhQn7xiSj-yWISQ&usqp=CAU.png" alt="" />
        </div>
        <div className={styles.catetory}>
          <Button className={styles.cat}variant="contained">content</Button>
          <Button className={styles.cat}variant="contained">content</Button>
          <Button className={styles.cat}variant="contained">content</Button>
          <Button className={styles.cat}variant="contained">content</Button>
        </div>
        <div className={styles.videos}>
          {data?.map((value, index) => {
            return (
              <div className={styles.item} key={index}>
                <Card
                  img={value.snippet.thumbnails.default.url}
                  title={value.snippet.title}
                  channel={value.snippet.channelTitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Detail;
