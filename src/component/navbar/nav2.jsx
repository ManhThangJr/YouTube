import React, { useState } from "react";
import styles from "./nav.module.scss";
import { BsFillHouseDoorFill, BsClockHistory } from "react-icons/bs";
import { MdShortcut } from "react-icons/md";
import { FiYoutube } from "react-icons/fi";
import { SiYoutubegaming } from "react-icons/si";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { BiLike } from "react-icons/bi";

import {
  FcMusic,
  FcSportsMode,
  FcNews,
  FcMultipleDevices,
} from "react-icons/fc";
import { useNavigate } from "react-router-dom";

function Nav({state,setState,toggle}) {

  var nav1 = [
    { icon: <BsFillHouseDoorFill className={styles.icon} />, title: "Trang chủ" },
    { icon: <MdShortcut className={styles.icon} />, title: "Short" },
    { icon: <FiYoutube className={styles.icon} />, title: "Kênh đăng kí" },
  ];
  
  var nav2 = [
    { icon: <SiYoutubegaming className={styles.icon} />, title: "Thư viện" },
    {
      icon: <RxCounterClockwiseClock className={styles.icon} />,
      title: "Video đã xem",
    },
    { icon: <BsClockHistory className={styles.icon} />, title: "Xem sau" },
    { icon: <BiLike className={styles.icon} />, title: "Video đã thích" },
  ];
  
  var nav3 = [
    { icon: <FcMusic className={styles.icon} />, title: "Âm nhạc" },
    { icon: <FcSportsMode className={styles.icon} />, title: "Thể Thao" },
    { icon: <FcMultipleDevices className={styles.icon} />, title: "Trò chơi" },
    { icon: <FcNews className={styles.icon} />, title: "Tin tức" },
  ];
  const nav=useNavigate()
  return (
    <>
      
        <div className={styles.container} id={styles.container}>
          {nav1.map((item, index) => {
            return (
              <div key={index} onClick={()=>{
               toggle()
               nav('/')
              }}>
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
          {nav2.map((item, index) => {
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
      
    </>
  );
}

export default Nav;
