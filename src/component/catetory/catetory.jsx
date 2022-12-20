import React, { useState } from "react";
import styles from "./catetory.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Slider from '../slider/slider'

function Catetory() {
  const data = [
    { name: "Việt Nam", id: "VN", open: false },
    { name: "Indonesia", id: "ID", open: false },
    { name: "Hong Kong", id: "HK", open: false },
    { name: "Japan", id: "JP", open: false },
    { name: "Korea", id: "KR", open: true },
    { name: "Thái Lan", id: "TL", open: false },
    { name: "Đài Loan", id: "TL", open: false },
    { name: "France", id: "FR", open: false },
    { name: "Hunggary", id: "FR", open: false },
    { name: "Denmark", id: "DE", open: false },
    { name: "Tây Ban Nha", id: "SP", open: false },
    { name: "Argentina", id: "AR", open: false },
    { name: "Nigeria", id: "NI", open: false },
    { name: "Mexico", id: "ME", open: false },
    { name: "Croatia", id: "CR", open: false },
    { name: "Greek", id: "GR", open: false },
    { name: "Ấn Độ", id: "IN", open: false },
  ];

  const nav = useNavigate();
  const handleClick = (index) => {
    setCheck(()=>{
      let newData=[...check]
      newData[index].open=! newData[index].open
      newData.map((v,i)=>{
        if (i!=index) v.open=false
      })
      return newData
    })
    nav(`/categories/${data[index].id}`);
  };

  const isOpen = useSelector((state) => state.isOpen);
  const [check, setCheck] = useState([...data]);
  function Render({ item, index, open }) {
    return (
      <>
        {open ? (
          <div
            className={styles.catetory2}
            key={index}
            onClick={() => handleClick(index)}
          >
            {item.name}
          </div>
        ) : (
          <div
            className={styles.catetory}
            key={index}
            onClick={() => handleClick(index)}
          >
            {item.name}
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <div className={isOpen?.value ? styles.container : styles.open}>
        <Slider>
        {check?.map((item, index) => {
          return (           
              <Render index={index} item={item} open={item.open} key={index}/>
          )
        })}
        </Slider>
      </div>
    </>
  );
}

export default Catetory;
