import React, { useEffect, useState } from "react";
import styles from "./detail.module.scss";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import { Box, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";
import FormControlLabel from "@mui/material/FormControlLabel";

function Detail() {
  const nav=useNavigate()
  const { id } = useParams();
  const [data, setData] = useState();
  const [hidden, setHidden] = useState(true);
  const [info, setInfo] = useState([]);
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
    setHidden(prev=>!prev)
  };

  useEffect(() => {
    fetching(30).then((res) => {
      setData(res.items);
    });
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDbOfLhWIQJFExk4AYMD5d1zYN6Gve90Bc&part=snippet&id=${id}`
      )
      .then((res) => {
        setInfo(res.data.items);
        document.title=res.data.items[0]?.snippet?.title
      });
      window.scrollTo(0 ,0)
    }, [id]);
    console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div
          style={{
            width: "92%",
            position: "relative",
            display: "block",
            paddingTop: "48%",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}?autoplay=1&clipboard-write`}
            title="abc"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          />
        </div>
        <div className={styles.under}>
          <Link
            className={styles.tag}
            style={{
              textDecoration: "none",
              color: "#065fd4",
              fontSize: "80%",
            }}
          >
            {info[0]?.snippet?.tags?.map((v, i) => (
              <span style={{ margin: "1px 2px 0 1%" }} key={i}>
                #{v}
              </span>
            ))}
          </Link>
          <h3>{info[0]?.snippet.localized.title}</h3>
          <div className={styles.containerCard}>
            <div className={styles.card}>
              <div className={styles.avatar}>
                <img
                  style={{ borderRadius: "50%", width: "100%", height: "100%" }}
                  src={info[0]?.snippet.thumbnails.default.url}
                  alt=""
                />
              </div>
              <div>
                <h4>{info[0]?.snippet.channelTitle}</h4>
                <p>dang ki</p>
              </div>
              <button className={styles.btn}>Đăng Kí</button>
            </div>
            <div className={styles.rightCard}>
              <div>
                <ThumbUpOffAltIcon className={styles.iconn} />
                <ThumbDownOffAltIcon className={styles.iconn} />
              </div>
              <div>
                <ReplyIcon className={styles.iconn} />
                <span>Chia sẻ</span>
              </div>
              <div>
                <DownloadIcon className={styles.iconn} />
                <span>Tải xuống</span>
              </div>
              <div>
                <ContentCutIcon className={styles.iconn} />
                <span>Tạo đoạn video</span>
              </div>
              <div>
                <MoreHorizIcon className={styles.iconn} />
              </div>
            </div>
          </div>

          <Box sx={{ height: "100%" }}  className={styles.description}>
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label={hidden?'Hiện thêm':'Ẩn'}
              sx={{fontSize:'80%'}}
            />
            <Collapse in={checked} collapsedSize={50} sx={{backgroundColor:'#eeeeee',backgroundImage: 'linear-gradient(#eeeeee, yellow)' }}>
              <Paper sx={{backgroundColor:'#eeeeee',padding:'2%'}} elevation={2} >
                <Box sx={{ width: "100%", height: "100%" }} >
                  <div >
                  {info[0]?.snippet.description}
                  </div>
                </Box>
              </Paper>
            </Collapse>
          </Box>

          <Comment id={id}/>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.adv}>
          <img
            style={{ width: "100%", borderRadius: " 10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHhlY0J4k_8MR1wEYREDrhQn7xiSj-yWISQ&usqp=CAU.png"
            alt=""
          />
        </div>
        <div className={styles.catetory}>
          <Button className={styles.cat} variant="contained">
            content
          </Button>
          <Button className={styles.cat} variant="contained">
            content
          </Button>
          <Button className={styles.cat} variant="contained">
            content
          </Button>
          <Button className={styles.cat} variant="contained">
            content
          </Button>
        </div>
        <div className={styles.videos}>
          {data?.map((value, index) => {
            return (
              <div className={styles.item} key={index} onClick={()=>nav(`/detail/${value?.id}`)}>
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
