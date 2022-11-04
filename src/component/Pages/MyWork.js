import React from 'react';
import Card from 'react-bootstrap/Card';


const styles = {
  card:{
   display: "flex",
   justifyContent:"space-around",
   paddingTop:100
  }
};


export default function MyWork() {
  return (
    <div>
      <h2>My Work</h2>
      <div style={styles.card}>
      <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../assets/bg-img.png" />
        <Card.Body>
          <Card.Title>Happy Holidays Gift Tracker</Card.Title>
          <Card.Text>
            an application that allows users to track their  holiday budget and gifts
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href="https://safe-taiga-52542.herokuapp.com">view project</Card.Link>

        </Card.Body>
        
      </Card>
      </div>
      <div>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../assets/bg-img.png" />
        <Card.Body>
          <Card.Title>Employee Tracker</Card.Title>
          <Card.Text>
            an application that allows users to update, delete, create new employees
          </Card.Text>
        </Card.Body>
        
        <Card.Body>
          <Card.Link href="https://github.com/posty65841/employee-tracker">view project</Card.Link>

        </Card.Body>
       
      </Card>
      </div>
      </div>

      <div style={styles.card}>
      <div>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../assets/bg-img.png" />
        <Card.Body>
          <Card.Title>MEME generator</Card.Title>
          <Card.Text>
            an application that allows users to generate memes
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href="https://github.com/posty65841/Meme-Gen">view project</Card.Link>

        </Card.Body>
       
        
      </Card>
      </div>
      <div>
     
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="../../assets/bg-img.png" />
        <Card.Body>
          <Card.Title>Weather Tracker</Card.Title>
          <Card.Text>
            an application that allows users to track the weather in any major city
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href="https://github.com/posty65841/weather-app-">view project</Card.Link>

        </Card.Body>
      </Card>
      </div>
      </div>




    </div >
  );
}
