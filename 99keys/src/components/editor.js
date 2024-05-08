import React, { useState, useEffect} from 'react'
import Cropper from 'react-easy-crop'
import Slider from '@material-ui/core/Slider'
import Typography from '@material-ui/core/Typography'
import getCroppedImg from '../utils/cropImage'
import Row from 'react-bootstrap/Row';
import '../styling/styles.css'  
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';

function Editor({plan}, {classes}) {

  //cropping state variables
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  
  //editor mode logic 
  const [picture, setPicture] = useState(null);
  const [cropping, setCropping] = useState(false);

  //sets the picture variable whenever the plan variable changes
  useEffect(() => {
    setPicture(plan);
  },[plan])


  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(
        plan,
        croppedAreaPixels,
        rotation
      )
      
      setCroppedImage(croppedImage);
      setPicture(croppedImage);
      setCropping(false);
    } catch (e) {
      console.error(e)
    }
  }
  
  //starts cropping if user presses button
  const startCrop = () => {
    if(!plan)
      alert('You have not selected a photo yet!')
    else
      setCropping(true);
    
  }

  const resetImage = () => {
      setCropping(false);
      setPicture(plan);
      setCrop({ x: 0, y: 0 });
      setRotation(0);
      setZoom(1);
  }

  return (

    <Container className='boundary'>
      
      <Row className = 'cropContainer'>
          {cropping ? <Cropper
              image={plan}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              />: <img src={picture}/> }
      </Row>

      <Row className = 'controls'>
        
          {cropping ? <div className='sliderContainer'>
            <Typography variant="overline">
              Zoom
            </Typography>
            <Slider
              value={zoom}
              min={1}
              max={3}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => setZoom(zoom)}  
            />
          </div> : null} 

          { cropping ? 
          <div className='sliderContainer'>
            <Typography
              variant="overline"
            >
              Rotation
            </Typography>
            <Slider
              value={rotation}
              min={0}
              max={360}
              step={1}
              aria-labelledby="Rotation"
              onChange={(e, rotation) => setRotation(rotation)}
            />
        </div> : null}

        
          <Row className="buttons">
            <button
              onClick={showCroppedImage}
              variant="contained"
              color="primary"
            >
              Save
            </button>

            <button onClick = {resetImage}>
              Reset
            </button>

            <button onClick={startCrop}>
              Edit
            </button>
          </Row>

      </Row>

  
    </Container>
  )
      
}

export default Editor;
