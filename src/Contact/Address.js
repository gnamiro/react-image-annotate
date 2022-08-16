// import React from "react"

// class Address extends React.Component{
//     constructor(){
//         super();
//     }
    
//     render(){
//         return(
//             <div>
                
//             </div>
//         );
//     }
// }

// export default Address;

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { AttributionControl, setRTLTextPlugin } from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import "./Address.css"

import { Container, Row, Col } from "react-bootstrap";

mapboxgl.accessToken = 'pk.eyJ1IjoiYWhlZGF5YXQiLCJhIjoiY2t4b3U0OHkzMjFoNzJ5cWt1aXNrb3RuaiJ9.DIBm1IL2vBN6Xgq4BQGaRg';

function MyMap() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(51.38777192003732);
  const [lat, setLat] = useState(35.724662420218955);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      attributionControl: false
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      AttributionControl()
    });
  });

  return (
    <div>
      <div 
        ref={mapContainer} 
        className="map-container"  
        style={{width: "100%", height: "35vh"}} 
       />

    </div>
  );
}

export default function Address() {

    return(
        <Container fluid>
            <Row>
                <Col md={{span:12}}>
                    <MyMap />
                </Col>
            </Row>
            <Row>
                <Col md={{span:12}}>
                    <p className='h5' style={{marginTop: "2vh", display: 'flex', justifyContent: 'center'}}>
                      <strong>
                      Address: NBIC, University of Tehran, Tehran, Iran
                      </strong>
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

// import React, {useState} from "react";
// import ReactMapGL from "react-map-gl";

// export default function Address() {
//     const [viewport, setViewport] = useState({
//         latitude: 45.4211,
//         longitude: -75.6903,
//         width: "100vw",
//         height: "100vh", 
//         zoom: 10
//     });

//     return(
//         <div>
//             <ReactMapGL 
//             {...viewport}
//             mapboxAccessToken="pk.eyJ1IjoiYWhlZGF5YXQiLCJhIjoiY2w2c2M4aWI5MHp3cTNmbW0xc2JkdzhibCJ9.CB1OXs9MN5_VaMqEloCCvg"
//             >
//             </ReactMapGL>
//         </div>
//     );
// }
