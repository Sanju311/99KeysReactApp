
import '../styling/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Specs from './specifications.js';
import Editor from './editor.js';
import Plans from './floorPlans';
import React, {useState} from 'react';


function App() {

  //controls which file is being edited
  const[plan, setPlan] = useState('');

  return (
    <div className = "app">
      <Container className= "container" fluid>
        <Row className = "row" >
          
          <Col className = "column left"  > Floor Plans 
            <Plans setPlan={setPlan}/>
          </Col>
          
          <Col className = "column middle" md={7} > Adjust Floor Plan
            <Editor plan={plan}/>
          </Col> 
      
          <Col className = "column right" > 
            <Specs/>
          </Col>        
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
