import React from 'react';
import Card from 'react-bootstrap/Card';


const styles = {
  card:{
   display: "flex",
   justifyContent:"space-around",
   paddingTop:100
  },
  footer:{
    display: "flex",
    justifyContent:"space-around",
    
   }
};


export default function MyWork() {
  return (
    <div>
      <h2>My Work</h2>
      <div style={styles.card}>
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../../assets/bg-img.png")} />
        <Card.Body>
          <Card.Title>Happy Holidays Gift Tracker</Card.Title>
          <Card.Text>
            an application that allows users to track their  holiday budget and gifts
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link target="_blank" href="https://safe-taiga-52542.herokuapp.com">view project</Card.Link>
          <Card.Link target="_blank" href="https://github.com/posty65841/HappyHolidaysGiftTracker"> view repo</Card.Link>

        </Card.Body>
        
      </Card>
      </div>
      <div>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../../assets/Screen Shot 2022-11-05 at 13.12.18.png")} />
        <Card.Body>
          <Card.Title>Employee Tracker</Card.Title>
          <Card.Text>
            an application that allows users to update, delete, create new employees via the command line 
          </Card.Text>
        </Card.Body>
        
        <Card.Body>
          <Card.Link target="_blank" href="https://github.com/posty65841/employee-tracker">view project</Card.Link>

        </Card.Body>
       
      </Card>
      </div>
      </div>

      <div style={styles.card}>
      <div>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../../assets/meme.png")} />
        <Card.Body>
          <Card.Title>MEME generator</Card.Title>
          <Card.Text>
            an application that allows users to generate memes
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link target="_blank" href="https://github.com/posty65841/Meme-Gen">view project</Card.Link>
          <Card.Link target="_blank" href="https://github.com/posty65841/Meme-Gen">view project</Card.Link>

        </Card.Body>
       
        
      </Card>
      </div>
      <div>
     
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../../assets/Screen Shot 2022-11-03 at 20.23.51.png")} />
        <Card.Body>
          <Card.Title>Weather Tracker</Card.Title>
          <Card.Text>
            an application that allows users to track the weather in any major city
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link target="_blank" href="https://github.com/posty65841/weather-app-">view repo</Card.Link>
          <Card.Link target="_blank" href="https://posty65841.github.io/weather-app-/">view project</Card.Link>

        </Card.Body>
      </Card>
      </div>
      </div>
      <div style={styles.card}>
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../../assets/Screen Shot 2022-11-05 at 13.19.12.png")} />
        <Card.Body>
          <Card.Title>Team Display</Card.Title>
          <Card.Text>
            an application that allows users to create and build teams 
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link target="_blank" href="https://github.com/posty65841/team_display">view project</Card.Link>

        </Card.Body>
        
      </Card>
      </div>
      <div>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../../assets/Screen Shot 2022-11-05 at 13.26.37.png")} />
        <Card.Body>
          <Card.Title>Note Taker </Card.Title>
          <Card.Text>
            an application that allows users to take notes, delete notes with time stamps 
          </Card.Text>
        </Card.Body>
        
        <Card.Body>
          <Card.Link target="_blank" href="https://github.com/posty65841/note-taker">view repo</Card.Link>
          <Card.Link target="_blank" href="https://obscure-headland-88481.herokuapp.com/">view project</Card.Link>

        </Card.Body>
       
      </Card>
      </div>
      </div>

      <br></br>

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



    </div >
  );
}
