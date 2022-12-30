import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./progess.module.scss";
import HandleProgess from "../useContext/checkProgess";

export default function LinearDeterminate() {

  const checkProgess=useContext(HandleProgess)
  const [progress, setProgress] = React.useState(0);
  const [finish, setFinish] = useState(false);

  React.useEffect(() => {
    if (checkProgess.checkProgess) {
      setFinish(false);
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            checkProgess.setCheckProgess(false)
            setFinish(true);
            return 0;
          }
          const diff = Math.random() * 35;
          return Math.min(oldProgress + diff, 100);
        });
      }, 100);
      return () => {
        clearInterval(timer);
      };
    }
    
  }, [checkProgess.checkProgess]);
 
  return (
    <Box sx={{ width: "100%" }} className={!finish ? styles.box : styles.unbox}>
      <LinearProgress variant="determinate" color="error" value={progress} />
    </Box>
  );
}
