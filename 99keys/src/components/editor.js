import React, { Component } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Plans from './floorPlans';

function Editor({plan}) {


    return(

          <div>
            <img src={plan} className = "img" />

          </div>

    );

}

export default Editor;