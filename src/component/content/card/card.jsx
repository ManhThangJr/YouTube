import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./card.module.scss";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BsClock } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";

export default function Media({
  img,
  avatar,
  title,
  view,
  channel,
  time,
  id,
  loading,
  duration,
  Channel,
  idd,
}) {
  const nav = useNavigate();
  const [play, setPlay] = useState(false);
  const [move, setMove] = useState(false);
  const [dura, setDura] = useState(true);

  const handlePlay = () => {
    setDura(false);
    setMove(true);
    ref.current = setTimeout(() => {
      setMore(true);
      setPlay(true);
      setMove(false);
    }, 1800);
  };

  const ref = useRef();
  const handleOut = () => {
    clearTimeout(ref.current);
  };

  const handleChannel = (e) => {
    window.location.replace(`https://www.youtube.com/channel/${Channel}`);
  };

  const [more, setMore] = useState(false);

  const Video = () => {
    return (
      <div style={{ width: "100%", height: "200px" }}>
        <iframe
          onMouseLeave={handleOut}
          className={styles.video}
          width="100%"
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
      <div
        className={styles.container}
        onMouseLeave={() => {
          setMore(false);
          setMove(false);
          setPlay(false);
          setDura(true);
        }}
      >
        <Card
          sx={{ boxShadow: "none" }}
          className={styles.card}
          onClick={() => {
            nav(`/detail/${idd}`);
          }}
        >
          {play ? (
            <Video />
          ) : loading ? (
            <Skeleton
              sx={{ borderRadius: "20px", width: "100%" }}
              height="200px"
              image={img}
              className={styles.img}
              animation="wave"
              variant="rectangular"
            />
          ) : (
            <div style={{position:'relative'}}>
              <CardMedia
                ref={ref}
                onMouseLeave={handleOut}
                onMouseOver={handlePlay}
                sx={{
                  borderBottomLeftRadius: "15px",
                  borderBottomRightRadius: "15px",
                }}
                component="img"
                image={img}
                alt="Paella dish"
                className={styles.img}
              ></CardMedia>
              {!loading ? (
                dura ? (
                  <div className={styles.duration}>{duration}</div>
                ) : move ? (
                  <div className={styles.move}>Ti???p t???c di chu???t ????? ph??t</div>
                ) : null
              ) : null}
            </div>
          )}
          <CardContent
            sx={{
              width: "100%",
              padding: "2%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            {loading ? (
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            ) : (
              <div className={styles.avatar} onClick={(e)=>handleChannel()}>
                <img src={avatar} className={styles.avt} />
              </div>
            )}

            <div style={{ width: "76%", height: "max-content" }}>
              {loading ? (
                <Skeleton animation="wave" className={styles.title} />
              ) : (
                <Typography
                  variant="body3"
                  color="text.secondary"
                  className={styles.title}
                >
                  {title}
                </Typography>
              )}
              <div className={styles.channel}>
                {loading ? (
                  <Skeleton width="20%" height="20px" />
                ) : (
                  <p>{channel}</p>
                )}
                <p style={{ width: "100%" }}>
                  {loading ? (
                    <Skeleton animation="wave" width="20px" height="20px" />
                  ) : (
                    <span className={styles.v}>{view}</span>
                  )}
                  <span>
                    {loading ? null : (
                      <FiberManualRecordIcon className={styles.dot} />
                    )}
                  </span>
                  {loading ? (
                    <Skeleton width="20px" height="20px" />
                  ) : (
                    <span>{time}</span>
                  )}
                </p>
              </div>
            </div>
            {loading ? null : (
              <div className={styles.more}>
                <MoreVertIcon />
              </div>
            )}
          </CardContent>
          {more ? (
            <Stack
              spacing={1}
              direction="row"
              justifyContent="space-between"
              sx={{ width: "96%", margin: "0 auto 10px " }}
            >
              <Button
                className={styles.btn}
                variant="text"
                sx={{
                  width: "48%",
                  backgroundColor: "rgb(241, 241, 241);",
                  fontSize: "60%",
                  color: "rgb(31, 31, 31)",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "20px",
                }}
              >
                <BsClock style={{ fontSize: "140%", marginRight: "2%" }} />{" "}
                <span style={{ fontWeight: "bold" }}>Xem sau</span>
              </Button>
              <Button
                className={styles.btn}
                variant="text"
                sx={{
                  width: "48%",
                  backgroundColor: "rgb(241, 241, 241);",
                  fontSize: "60%",
                  color: "rgb(31, 31, 31)",
                  fontWeight: "550",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "20px",
                }}
              >
                <CgPlayList style={{ fontSize: "170%", marginRight: "2%" }} />
                <span style={{ fontWeight: "bold" }}>
                  Th??m v??o danh s??ch ch???
                </span>
              </Button>
            </Stack>
          ) : null}
        </Card>
      </div>
    </>
  );
}
