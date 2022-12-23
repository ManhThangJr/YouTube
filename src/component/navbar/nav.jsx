import React, { useState } from "react";
import styles from "./nav.module.scss";
import { BsFillHouseDoorFill, BsClockHistory } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import { TfiShortcode, TfiYoutube } from "react-icons/tfi";
import { useSelector } from "react-redux";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import VoiceChatOutlinedIcon from "@mui/icons-material/VoiceChatOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import {
  FcMusic,
  FcSportsMode,
  FcNews,
  FcMultipleDevices,
} from "react-icons/fc";

var nav1 = [
  { icon: <BsFillHouseDoorFill className={styles.icon} />, title: "Trang chủ" },
  { icon: <VoiceChatOutlinedIcon className={styles.icon} />, title: "Short" },
  {
    icon: <SubscriptionsOutlinedIcon className={styles.icon} />,
    title: "Kênh đăng kí",
  },
];

var nav2 = [
  {
    icon: <VideoLibraryOutlinedIcon className={styles.icon} />,
    title: "Thư viện",
  },
  {
    icon: <HistoryOutlinedIcon className={styles.icon} />,
    title: "Video đã xem",
  },
  {
    icon: <SlideshowIcon className={styles.icon} />,
    title: "Video của bạn",
  },
  { icon: <QueryBuilderIcon className={styles.icon} />, title: "Xem sau" },
  { icon: <BiLike className={styles.icon} />, title: "Video đã thích" },
];

var nav3 = [
  { icon: <FcMusic className={styles.icon} />, title: "Âm nhạc" },
  { icon: <FcSportsMode className={styles.icon} />, title: "Thể Thao" },
  { icon: <FcMultipleDevices className={styles.icon} />, title: "Trò chơi" },
  { icon: <FcNews className={styles.icon} />, title: "Tin tức" },
];

var nav4 = [
  { icon: <LocalFireDepartmentOutlinedIcon className={styles.icon} />, title: "Thịnh hành" },
  { icon: <MusicNoteOutlinedIcon className={styles.icon} />, title: "Âm nahcj" },
  { icon: <SportsEsportsOutlinedIcon className={styles.icon} />, title: "Trò chơi" },
  { icon: <NewspaperOutlinedIcon className={styles.icon} />, title: "Tin tức" },
  { icon: <EmojiEventsOutlinedIcon className={styles.icon} />, title: "Thể thao" },
];

function Nav() {
  const isOpen = useSelector((state) => state.isOpen);
  const [show, setShow] = useState(false);

  return (
    <>
      {!isOpen.value ? (
        <div className={styles.wraper}>
          <div className={styles.wrap}>
            <BsFillHouseDoorFill className={styles.ic} />
            <p>Trang chủ</p>
          </div>
          <div className={styles.wrap}>
            <TfiShortcode className={styles.ic} />
            <p>Shorts</p>
          </div>
          <div className={styles.wrap}>
            <TfiYoutube className={styles.ic} />
            <p>Kênh đăng ký</p>
          </div>
          <div className={styles.wrap}>
            <FiYoutube className={styles.ic} />
            <p>Thư </p>
          </div>
        </div>
      ) : (
        <div
          className={!show ? styles.container : styles.container2}
          onMouseOver={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {nav1.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            );
          })}
          <hr />
          {nav2.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            );
          })}
          <hr />
          <div id={styles.name}>Kênh đăng kí</div>
          {nav3.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            );
          })}
          <hr />
          <div id={styles.name}>Khám phá</div>
          {nav4.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            );
          })}
          <hr />
          <div id={styles.name}>Dịch vụ khác của YouTube</div>
          {nav2.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            );
          })}
          <hr />
          <div id={styles.name}>Cài đặt</div>
          {nav2.map((item, index) => {
            return (
              <div key={index}>
                {item.icon}
                <span>{item.title}</span>
              </div>
            );
          })}
          <hr />
          <p className={styles.service}>
            Giới thiệu Báo chí Bản quyền Liên hệ với chúng tôi Người sáng tạo
            Quảng cáo Nhà phát triển
          </p>
          <p className={styles.service}>
            Điều khoản Quyền riêng tư Chính sách và an toàn Cách You Tube hoạt
            động Thử các tính năng mới
          </p>
        </div>
      )}
    </>
  );
}

export default Nav;
