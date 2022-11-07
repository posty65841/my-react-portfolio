
const styles = {
    Resume:{
     display: "flex",
     justifyContent:"space-around",
     paddingTop:100
    },
    
  };



function Resume() {
    return (
        <div>
           

                <h2>Resume</h2>
             <p>click to view resume
                <a style={styles.Resume}
                 target="_blank" href="https://drive.google.com/file/d/1wGna016rueNkSVdt-_BeWcU5FYS5vADU/view?usp=sharing">
                <img src={require("../../assets/Screen Shot 2022-11-07 at 10.47.52.png")} alt="resume img" width="50%" height="50%" />
                </a>
                
                </p>

        </div>
    );
}

export default Resume;