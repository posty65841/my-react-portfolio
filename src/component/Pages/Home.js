import React from 'react';
const styles = {
  footer:{
   display: "flex",
   justifyContent:"space-around",
   
  }
};

export default function Home() {
  return (
    <div>
      <h1>Austin Post </h1>
      
      <p > 
        <img src={require("../../assets/8220B1F4-07AE-427F-BD37-7B4671ABAD64_1_105_c.jpeg")} alt="my logo" width="100%" height="100%" />
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
