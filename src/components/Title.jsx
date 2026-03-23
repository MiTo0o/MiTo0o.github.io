// import Box from '@mui/material/Box';
import * as React from "react";
import titleLogo from "../assets/images/title.svg";
import Grid from "@mui/material/Grid";
import Typed from "react-typed";

function Title() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "86.5vh" }}
    >
      <Grid item xs={3}>
        <img
          src={titleLogo}
          className="App-logo"
          alt="logo"
          width="100%"
          height="auto"
        />
      </Grid>
      <Typed
        loop
        style={{ fontSize: 30 }}
        typeSpeed={50}
        backSpeed={35}
        strings={[
          "Cat Lover",
          "Dog Lover",
          "Software Engineer",
          "Full Stack Developer",
          "Factorio Fan",
          "Animal Petter",
          "Python Enthusiast",
          "Java Avoider",
          "Boba Tea Critic",
          "Terraria Explorer",
          "3 v 3 Basketball Enjoyer",
          "Foodie",
          "Home Chef",
          "Manga Reader",
          "Korean Soft Tunes Listener",
        ]}
        smartBackspace
        shuffle={true}
        backDelay={1000}
        fadeOut={false}
        fadeOutDelay={100}
      />
    </Grid>
  );
}
export default Title;
