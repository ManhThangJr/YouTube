import React, { useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./progess.module.scss";

export default function LinearDeterminate({ checkProgess, setCheckProgess }) {
  const [progress, setProgress] = React.useState(0);
  const [finish, setFinish] = useState(false);

  React.useEffect(() => {
    if (checkProgess) {
      setFinish(false);
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            setCheckProgess(false);
            setFinish(true);
            return 0;
          }
          const diff = Math.random() * 30;
          return Math.min(oldProgress + diff, 100);
        });
      }, 100);

      return () => {
        clearInterval(timer);
      };
    }
  }, [,checkProgess]);

  return (
    <Box sx={{ width: "100%" }} className={!finish ? styles.box : styles.unbox}>
      <LinearProgress variant="determinate" color="error" value={progress} />
    </Box>
  );
}
