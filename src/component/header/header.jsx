import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./header.module.scss";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import {
  FaMicrophone,
  FaKeyboard,
  FaUserShield,
  FaLanguage,
} from "react-icons/fa";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdWifiTethering } from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { useNavigate, useSearchParams } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Popper from "@mui/material/Popper";
import { isOpen } from "../redux/isOpen";
import { FcSettings } from "react-icons/fc";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Nav from "../navbar/nav2";
import { BsBell, BsFillPersonFill, BsBoxArrowRight } from "react-icons/bs";
import { BiArrowBack, BiUserCircle } from "react-icons/bi";
import { WiMoonWaxingCrescent4 } from "react-icons/wi";
import { GrLanguage, GrUserAdmin } from "react-icons/gr";
import { AiFillSetting, AiOutlineDollarCircle } from "react-icons/ai";
import { TbFileAlert } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";
import { SiYoutubemusic } from "react-icons/si";
import { SlArrowRight } from "react-icons/sl";
import MoreVert from "@mui/icons-material/MoreVert";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import { setPass } from "../redux/pass";
import avatar from "../../img/avatar.jpg";
import Progess from "../../MUI/progess";
import CheckProgess from "../../useContext/checkProgess";
import Category from "../../useContext/category";

function Header() {
  const progess = useContext(CheckProgess);
  const cate = useContext(Category);
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [search, setSearch] = useSearchParams();
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const sign = useSelector((value) => value.pass.value);

  const handleClick = (event) => {
    event.stopPropagation();
    setCheck(false);
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setAnchorEl2(null);
    setAnchorEl3(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const handleCheckIn = () => {
    if (!open) setCheck(true);
  };
  const handleCheckOut = () => {
    setCheck(false);
  };

  const handleClick2 = (event) => {
    event.stopPropagation();
    setCheck2(false);
    setAnchorEl2(anchorEl2 ? null : event.currentTarget);
    setAnchorEl(null);
    setAnchorEl3(null);
  };
  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);
  const id2 = open2 ? "simple-popper" : undefined;
  const handleCheckIn2 = () => {
    if (!open2) setCheck2(true);
  };
  const handleCheckOut2 = () => {
    setCheck2(false);
  };

  const handleClick3 = (event) => {
    event.stopPropagation();
    setCheck3(false);
    setAnchorEl3(anchorEl3 ? null : event.currentTarget);
    setAnchorEl(null);
    setAnchorEl2(null);
  };
  const [anchorEl3, setAnchorEl3] = useState(null);
  const open3 = Boolean(anchorEl3);
  const id3 = open3 ? "simple-popper" : undefined;
  const handleCheckIn3 = () => {
    if (!open3) setCheck3(true);
  };
  const handleCheckOut3 = () => {
    setCheck3(false);
  };

  const nav = useNavigate();

  const handleSearch = (e) => {
    if (query) {
      const search_query = query;
      setSearch({ search_query });
      progess.setCheckProgess(true);
      nav(`result?search_query=${query}`);
    }
  };

  const handleGohome = () => {
    cate?.setCategory("VN");
    progess.setCheckProgess(true);
    console.log(cate?.category);
    nav("/");
    document.title='YouTube'
  };
  const [state, setState] = React.useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => () => {
    if (window.innerWidth > 1300) dispatch(isOpen(!isOpen));
    setState({ ...state, ["left"]: open === true ? false : true });
    console.log("1");
  };

  function SwipeableTemporaryDrawer() {
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      >
        <List>
          <div className={styles.first2}>
            <span>
              <MenuOutlined className={styles.menu2} />
            </span>
            <div className={styles.img} onClick={handleGohome}>
              <img
                style={{ height: "70px" }}
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
          </div>
          <Nav
            state={state}
            setState={setState}
            toggle={toggleDrawer("left", true)}
          />
        </List>
      </Box>
    );

    return (
      <div>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, state.left)}>
              <MenuOutlined style={{ color: "black" }} />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, state.left)}
              onOpen={toggleDrawer(anchor, true)}
            >
              {list(anchor)}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    );
  }

  const [isCheck, setIsCheck] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1300) setIsCheck(true);
    if (window.innerWidth > 1300) setIsCheck(false);
    if (window.innerWidth > 560) {
      setShow(false);
      setHeader(false);
    }
    if (window.innerWidth < 560) setShow(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1300) setIsCheck(true);
      if (window.innerWidth > 1300) setIsCheck(false);
      if (window.innerWidth > 560) {
        setShow(false);
        setHeader(false);
      }
      if (window.innerWidth < 685) setShow(true);
    });
    progess.setCheckProgess(true);
  }, []);

  const [show, setShow] = useState(false);
  const [header, setHeader] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <Progess />
      {!header ? (
        <div className={styles.headerContainer}>
          <div className={styles.first}>
            <span className={styles.menuIcon}>
              {isCheck ? (
                <SwipeableTemporaryDrawer
                  className={styles.menu}
                  onClick={toggleDrawer}
                />
              ) : (
                <MenuOutlined
                  className={styles.menu}
                  onClick={() => dispatch(isOpen(!isOpen))}
                />
              )}
            </span>
            <Tooltip title="Trang chủ YouTube">
              <div className={styles.img} onClick={handleGohome}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span>VN</span>
              </div>
            </Tooltip>
          </div>
          {!show ? (
            <div className={styles.wrapC}>
              {showSearch ? (
                <SearchOutlined className={styles.searchIcon} />
              ) : null}
              <div className={showSearch ? styles.wrapp : styles.wrap}>
                <input
                  type="text"
                  className={styles.search}
                  placeholder="Tìm kiếm"
                  list="list"
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => {
                    setShowSearch(true);
                  }}
                  onBlur={() => setShowSearch(false)}
                ></input>
                <span className={styles.keyboard}>
                  <FaKeyboard />
                </span>
              </div>
              <Tooltip title="Tìm kiếm">
                <span
                  className={styles.searchIcon2}
                  onClick={(e) => handleSearch(e)}
                >
                  <SearchOutlined />
                </span>
              </Tooltip>
              <Tooltip title="Tìm kiếm bằng giọng nói">
                <span className={styles.mic}>
                  <FaMicrophone />
                </span>
              </Tooltip>
            </div>
          ) : (
            <SearchOutlined
              className={styles.searchIcon3}
              onClick={() => setHeader(true)}
            />
          )}

          {sign ? (
            <>
              <div className={styles.last}>
                <Tooltip
                  title="Tạo"
                  open={check}
                  onMouseEnter={handleCheckIn}
                  onMouseLeave={handleCheckOut}
                >
                  <span>
                    <AiOutlineVideoCameraAdd onClick={handleClick} />
                  </span>
                </Tooltip>

                <Popper id={id} open={open} anchorEl={anchorEl}>
                  <Box
                    className={styles.modal}
                    onClick={() => setAnchorEl(null)}
                  >
                    <div>
                      <RiVideoLine className={styles.iconModal} />
                      <span>Tải video lên</span>
                    </div>
                    <div>
                      <MdWifiTethering className={styles.iconModal} />
                      <span>Phát trực tiếp</span>
                    </div>
                  </Box>
                </Popper>

                <Tooltip
                  title="Thông báo"
                  onClick={handleClick2}
                  onMouseEnter={handleCheckIn2}
                  onMouseLeave={handleCheckOut2}
                  open={check2}
                >
                  <span>
                    <BsBell />
                  </span>
                </Tooltip>
                <Popper id={id2} open={open2} anchorEl={anchorEl2}>
                  <Box
                    className={styles.modal2}
                    onClick={() => setAnchorEl2(null)}
                  >
                    <div>
                      <p>Thông báo</p>
                      <FcSettings style={{ fontSize: "160%" }} />
                    </div>
                    <div>
                      <BsBell
                        style={{
                          fontSize: "600%",
                          color: "gray",
                          marginTop: "40%",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "110%",
                          color: "rgb(75, 75, 75)",
                          marginTop: "2%",
                        }}
                      >
                        Thông báo của bạn hiển thị ở đây
                      </span>
                    </div>
                  </Box>
                </Popper>

                <Tooltip
                  title="Tài khoản"
                  onClick={handleClick3}
                  onMouseEnter={handleCheckIn3}
                  onMouseLeave={handleCheckOut3}
                  open={check3}
                >
                  <span className={styles.acount}>
                    <img
                      style={{ width: 36, height: 36, borderRadius: "50%" }}
                      src={avatar}
                    ></img>
                  </span>
                </Tooltip>
                <Popper id={id3} open={open3} anchorEl={anchorEl3}>
                  <Box
                    className={styles.modal3}
                    onClick={() => setAnchorEl3(null)}
                  >
                    <div>
                      <img
                        style={{ width: 41, height: 41, borderRadius: "50%" }}
                        src={avatar}
                      />
                      <div>
                        <p>Thắng Trần Mạnh</p>
                        <p>@user-yk5hm3xo6w</p>
                        <p>Quản lý Tài khoản Google của bạn</p>
                      </div>
                    </div>
                    <div className={styles.ac}>
                      <div>
                        <GrUserAdmin
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Kênh của bạn
                      </div>
                      <div>
                        <SiYoutubemusic
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Youtube Studio
                      </div>
                      <div>
                        <BsFillPersonFill
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Chuyển đổi tài khoản
                        <SlArrowRight
                          style={{
                            fontSize: "110%",
                            position: "relative",
                            left: "30%",
                          }}
                        />
                      </div>
                      <div
                        onClick={(e) => {
                          dispatch(setPass(false));
                          nav(`/`);
                        }}
                      >
                        <BsBoxArrowRight
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Đăng xuất
                      </div>
                    </div>
                    <div className={styles.ac}>
                      <div>
                        <AiOutlineDollarCircle
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Giao dịch mua và gói thành viên
                      </div>
                      <div>
                        <BiUserCircle
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Dữ liệu của bạn trong youTube
                      </div>
                    </div>
                    <div className={styles.ac}>
                      <div>
                        <WiMoonWaxingCrescent4
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Giao diện: Giao diện thiết bị
                      </div>
                      <div>
                        <FaLanguage
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Ngôn ngữ: Tiếng Việt
                      </div>
                      <div>
                        <FaUserShield
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Chế độ hạn chế: Đã tắt
                      </div>
                      <div>
                        <GrLanguage
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Địa điểm: Việt Nam
                      </div>
                      <div>
                        <FaKeyboard
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Phím tắt
                      </div>
                    </div>
                    <div className={styles.ac}>
                      <div>
                        <AiFillSetting
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Cài đặt
                      </div>
                    </div>
                    <div className={styles.ac}>
                      <div>
                        <FiHelpCircle
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Trợ giúp
                      </div>
                      <div>
                        <TbFileAlert
                          style={{ fontSize: "150%", margin: "0 6% 0 0" }}
                        />
                        Gửi ý kiến phản hồi
                      </div>
                    </div>
                  </Box>
                </Popper>
              </div>
            </>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "2%",
                minWidth: 186,
                flexGrow: 0.5,
                justifyContent: "flex-end",
              }}
            >
              <Tooltip title="cài dặt">
                <IconButton>
                  <MoreVert style={{ fontSize: "110%" }} />
                </IconButton>
              </Tooltip>
              <Button
                id="btn"
                onClick={() => nav(`/accounts`)}
                variant="outlined"
                sx={{ boderColor: "gray !important" }}
              >
                <AccountCircleIcon className={styles.admin} />
                <span>Đăng nhập</span>
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div
          className={styles.container2}
          style={{
            width: "100%",
            height: "70px",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            margin: "0 auto",
            position: "fixed",
            zIndex: "99999",
            top: 0,
            backgroundColor: "white",
          }}
        >
          <BiArrowBack
            style={{ fontSize: "130%", width: "10%", cursor: "pointer" }}
            onClick={() => setHeader(false)}
          />
          <div className={styles.wrapC2}>
            <SearchOutlined className={styles.searchIcon} />
            <div className={styles.wrap2}>
              <input
                type="text"
                className={styles.search2}
                placeholder="Tìm kiếm"
                autoFocus="true"
                list="list"
                onChange={(e) => setQuery(e.target.value)}
              ></input>
              <span className={styles.keyboard2}>
                <FaKeyboard />
              </span>
            </div>
            <Tooltip title="Tìm kiếm">
              <span className={styles.searchIcon4}>
                <SearchOutlined onClick={(e) => handleSearch(e)} />
              </span>
            </Tooltip>
            <Tooltip title="Tìm kiếm bằng giọng nói">
              <span className={styles.mic2}>
                <FaMicrophone />
              </span>
            </Tooltip>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
