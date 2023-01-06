import React, { useContext, useEffect, useState } from "react";
import styles from "./catetory.module.scss";
import { useSelector } from "react-redux";
import Slider from '../slider/slider'
import Category  from "../../useContext/category";

function Catetory() {
  const data = [
    { name: "Việt Nam", id: "VN", open:true },
    { name: "Hong Kong", id: "HK", open: false },
    { name: "Indonesia", id: "ID", open: false },
    { name: "Japan", id: "JP", open: false },
    { name: "Korea", id: "KR", open: false },
    { name: "Thái Lan", id: "TH", open: false },
    { name: "Đài Loan", id: "TW", open: false },
    { name: "France", id: "FR", open: false },
    { name: "Hunggary", id: "HU", open: false },
    { name: "Denmark", id: "DE", open: false },
    { name: "Qata", id: "QA", open: false },
    { name: "Argentina", id: "AR", open: false },
    { name: "Nigeria", id: "NI", open: false },
    { name: "Mexico", id: "ME", open: false },
    { name: "Croatia", id: "CR", open: false },
    { name: "Greek", id: "GR", open: false },
    { name: "Ấn Độ", id: "IN", open: false },
    { name: "Paraguay", id: "PA", open: false },
    { name: "Malaysia", id: "MA", open: false },
    { name: "Russia", id: "RU", open: false },
  ];
  const isOpen = useSelector((state) => state.isOpen);
  const [check, setCheck] = useState([...data]);
  const cate=useContext(Category)

    const handleClick = (index) => {
      let newData=[...check]
      newData[index].open=! newData[index].open
      newData.map((v,i)=>{
        if (i!=index) v.open=false
      })
      setCheck(newData)
      cate?.setCategory(data[index].id)
      window.scrollTo(0,0)
    };
 useEffect(()=>{
  let newData=[...check]
  newData.map((v)=>{
    if (v.id===cate?.category) {
      v.open=true}
      else v.open=false
  })
  setCheck(newData)
 },[cate?.category])
  function Render({ item, index, open }) {
    return (
      <>
          <div
            className={open?styles.catetory2:styles.catetory}
            key={index}
            onClick={() => handleClick(index)}
          >
            {item.name}
          </div>
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
