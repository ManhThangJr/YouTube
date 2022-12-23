import React from "react";
import { TextField, Link, Typography } from "@mui/material";
import styles from "./step1.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../../component/redux/account";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup.string().email().required(),
}).required();

function Step1() {
  const nav=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ resolver: yupResolver(schema) ,defaultValues:{
    email:'thangtm@rabiloo.com'
  }});
  const account = useSelector((state) => state.account.value);
  const disPatch = useDispatch();
  const email = watch("email");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div style={{ width: "20%", marginTop: "40px" }}>
          <img
            style={{ width: "100%" }}
            src="https://bucket-img.tnlmedia.com/cabinet/files/consoles/1/teams/1/2022/10/VK0vPA7T2NjDpQRxGeGKsG2IWV0Kd6979MMa7Ho5.jpg?auto=compress&fit=crop&h=630&w=1200"
          ></img>
        </div>
        <h2>Đăng nhập</h2>
        <Typography variant="h5" style={{ fontSize: "110%" }}>
          Tiếp tục với Youtube
        </Typography>
        <div style={{ width: "86%", margin: "20px 0 5px" }}>
          <TextField
            error={errors.email ? "error" : null}
            id="outlined-multiline-flexible"
            label="Email hoặc số điện thoại"
            multiline
            maxRows={4}
            sx={{ width: "100%", marginBottom: "5px" }}
            autoFocus
            {...register("email")}
          />
          {errors.email ? (
            <p
              style={{
                color: "red",
                fontSize: "85%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ErrorIcon style={{ fontSize: "130%", marginRight: "5px" }} />
              {'Email không hợp lệ hoặc không tồn tại'}
            </p>
          ) : null}
          <br />
          <Link
            href="#"
            underline="none"
            sx={{ color: "#1a73e8", fontWeight: "600", fontSize: "98%" }}
          >
            {"Bạn quên địa chỉ email ?"}
          </Link>
        </div>
        <br />
        <div style={{ width: "86%", fontSize: "90%", margin: "0 0 40px 0" }}>
          <span style={{ width: "100%" }}>
            {" "}
            Đây không phải máy tính của bạn? Hãy sử dụng chế độ Khách để đăng
            nhập một cách riêng tư.{" "}
          </span>
          <Link
            href="#"
            underline="none"
            sx={{ color: "#1a73e8", fontWeight: "700" }}
          >
            {"Tìm hiểu thêm"}
          </Link>
        </div>
        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          sx={{ width: "84%", margin: "0 auto" }}
        >
          <Button
            variant="text"
            sx={{ color: "#1a73e8", fontSize: "80%", fontWeight: "700" }}
          >
            Tạo Tài khoản
          </Button>
          <Button
            variant="contained"
            sx={{ fontSize: "80%", fontWeight: "700" }}
            onClick={handleSubmit(() => {
              disPatch(setAccount(email))
              nav(`/accounts/password`);
            })}
          >
            Tiếp theo
          </Button>
        </Stack>
      </div>
      <Box sx={{ flexGrow: 1, width: "448px", margin: "10px auto 0" }}>
        <Grid container spacing={0}>
          <Grid item xs={5.5}>
            <Button
              variant="text"
              sx={{ fontSize: "70%", color: "black", fontWeight: "bold" }}
            >
              Tiếng Việt
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="text"
              sx={{ fontSize: "70%", color: "gray", fontWeight: "bold" }}
            >
              Trợ giúp
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="text"
              sx={{ fontSize: "70%", color: "gray", fontWeight: "bold" }}
            >
              Bảo mật
            </Button>
          </Grid>
          <Grid item xs={2.5}>
            <Button
              variant="text"
              sx={{ fontSize: "70%", color: "gray", fontWeight: "bold" }}
            >
              Điều khoản
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Step1;
