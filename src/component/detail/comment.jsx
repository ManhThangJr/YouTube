import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./detail.module.scss";
import ThumbUpOffAlt from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAlt from "@mui/icons-material/ThumbDownOffAlt";
import avatar from '../../img/avatar.jpg'

function Comment() {
  const [data, setData] = useState();
  const { id } = useParams();
  const [amount, setAmount] = useState();
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=AIzaSyAzsRyOF9xYl7Y4pt5MaS-Xz2XcDbwut6U`
      )
      .then((res) => {
        setData(res.data.items);
        setAmount(res.data.items.length);
      });
  }, [id]);

  return (
    <div className={styles.containerComment}>
      <div className={styles.amount}>
        <div>{amount} bình luận</div>
        <div>Sắp xếp theo</div>
      </div>

      <div className={styles.middle}>
        <div><img style={{width:'40px',height:'40px',borderRadius:'50%'}}src={avatar} alt="" /></div>
        <input type="text" placeholder="Viết bình luận" />
      </div>

      {data?.map((value, index) => {
        return (
          <div className={styles.comment} key={index}>
            <div><img style={{width:'100%',borderRadius:'50%'}} src={value.snippet.topLevelComment.snippet.authorProfileImageUrl}></img></div>
            <div>
              <div>
                <span className={styles.nameComment}>
                  {value.snippet.topLevelComment.snippet.authorDisplayName}
                </span>
                <span className={styles.time}>
                  {value.snippet.topLevelComment.snippet.publishedAt}
                </span>
              </div>
              <div className={styles.Comment}>{value.snippet.topLevelComment.snippet.textDisplay}</div>

              <div>
                <span>
                  <ThumbUpOffAlt />
                  <span className={styles.time}>
                    {value.snippet.topLevelComment.snippet.likeCount > 0
                      ? value.snippet.topLevelComment.snippet.likeCount
                      : null}
                  </span>
                </span>
                <span>
                  <ThumbDownOffAlt />
                </span>
                <span className={styles.nameComment}>Phản hồi</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;
