import React from "react";
import styles from "./step2.module.scss";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import { Link, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import avatar from '../../img/avatar.jpg'
import { setPass } from "../../component/redux/pass";
import Avatar from "@mui/material/Avatar";

const schema = yup.object({
  password: yup.string().min(4).max(15).required(),
});

function Step2() {
  const disPatch = useDispatch();
  const nav = useNavigate();
  const account = useSelector((state) => state.account.value);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div style={{ width: "20%", marginTop: "40px" }}>
          <img
            style={{ width: "100%" }}
            src="https://bucket-img.tnlmedia.com/cabinet/files/consoles/1/teams/1/2022/10/VK0vPA7T2NjDpQRxGeGKsG2IWV0Kd6979MMa7Ho5.jpg?auto=compress&fit=crop&h=630&w=1200"
          ></img>
        </div>
        <Typography
          variant="h5"
          sx={{ color: "black", margin: "1px 0 5px", fontWeight: "bold" }}
        >
          Ch??o m???ng
        </Typography>
        <Box
          component="button"
          sx={{
            fontSize: "90%",
            padding: "2px 7px",
            borderRadius: "15px",
            border: "0.2px solid gray",
            backgroundColor: "white",
            color: "rgb(54, 54, 54)",
            display: "flex",
            alignItems: "center",
            fontWeight: "600",
          }}
        >
          <Avatar
            src={avatar}
            sx={{ marginRight: "5px",width:30,height:30 }}
          />
          {account}
        </Box>
        <div style={{ width: "86%", margin: "20px 0 5px" }}>
          <FormControl
            sx={{ m: "20px auto 0", width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password"></InputLabel>
            <TextField
              error={errors.password ? "error" : null}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Password"
              {...register("password")}
            />
            {errors.password ? (
              <p
                style={{
                  color: "red",
                  fontSize: "85%",
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <ErrorIcon style={{ fontSize: "130%", marginRight: "5px" }} />
                {"Sai m???t kh???u"}
              </p>
            ) : null}
          </FormControl>
          <br />
          <Link
            href="#"
            underline="none"
            sx={{ color: "black  ", fontSize: "98%" }}
          >
            <Checkbox
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            />{" "}
            {"Hi???n m???t kh???u"}
          </Link>
        </div>
        <br />

        <Stack
          spacing={2}
          direction="row"
          justifyContent="space-between"
          sx={{ width: "84%", margin: "0 auto" }}
        >
          <Button
            variant="text"
            sx={{
              color: "var(--gm-colortextbutton-ink-color,#1a73e8); ",
              fontSize: "90%",
              fontWeight: "bold",
            }}
          >
            B???n qu??n m???t kh???u?
          </Button>
          <Button
            variant="contained"
            sx={{ fontSize: "80%", fontWeight: "700" }}
            onClick={handleSubmit(() => {
              disPatch(setPass());
              nav("/");
            })}
          >
            Ti???p theo
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
              Ti???ng Vi???t
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="text"
              sx={{
                fontSize: "70%",
                color: "rgb(102, 102, 102);",
                fontWeight: "bold",
              }}
            >
              Tr??? gi??p
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="text"
              sx={{
                fontSize: "70%",
                color: "rgb(102, 102, 102);",
                fontWeight: "bold",
              }}
            >
              B???o m???t
            </Button>
          </Grid>
          <Grid item xs={2.5}>
            <Button
              variant="text"
              sx={{
                fontSize: "70%",
                color: "rgb(102, 102, 102);",
                fontWeight: "bold",
              }}
            >
              ??i???u kho???n
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Step2;
