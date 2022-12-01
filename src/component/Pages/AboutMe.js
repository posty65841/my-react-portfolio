import React from 'react';
const styles = {
  footer:{
   display: "flex",
   justifyContent:"space-around",
   
  }
};

export default function AboutMe() {
  return (
    <div>


      <h2>About me </h2>
      <p>
        My name is Austin Post i was born and raised in Dallas, Texas I have a background in multi media production,
        stream production, lighting, camera operations, and event management. I recently decided to push myself into the world of web development
        to better understand the technologies being used in my day to day life.
        <p>
          <img src={require("../../assets/IMG_6462.jpeg")} alt="my logo" width="100%" height="80%" />
        </p>


      </p>
      <footer style={styles.footer}> <a target="_blank" href="https://github.com/posty65841?tab=repositories">
        <img src={require("../../assets/gitrip.png")} alt="github img" width="30px" height="30px" />
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/austin-post-73a91823b/">
        <img src={require("../../assets/Screen Shot 2022-11-05 at 12.44.37.png")} alt="github img" width="30px" height="30px" />
                </a>
                <a target="_blank" href="https://twitter.com/AustinP56663007">
        <img src={require("../../assets/Screen Shot 2022-11-05 at 12.55.48.png")} alt="github img" width="30px" height="30px" />
                </a>

      </footer>

    </div>
  );
}
