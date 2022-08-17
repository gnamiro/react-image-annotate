// @flow
import React, { useState } from "react"
import ReactDOM from "react-dom"
import Editor, { examples } from "./Editor"
import Annotator from "../Annotator"
import ErrorBoundaryDialog from "./ErrorBoundaryDialog.js"
import axios from 'axios'

const splitRegionData = (region) => {
  console.log(region)
  let regionData = {}
  regionData['cls'] = region.cls
  regionData['comment'] = region.comment
  regionData['tags'] = region.tags
  if(region.type === "polygon"){
    regionData['type'] = "polygon"
    regionData['points'] = region.points
  }else if(region.type === "box"){
    regionData['type'] = 'box'
    regionData['coords'] = {'h': region.h, 'w': region.w, 'x': region.x, 'y': region.y}
  }else if(region.type === "circle"){
    regionData['type'] = 'circle'
    regionData['coords'] = {'rh': region.h, 'rw': region.w, 'rx': region.x, 'ry': region.y}
  }else{
    console.log('not a type')
  }

  return regionData
}

const sendData = (imageData) => {
  console.log(imageData)
  // axios.post('https://sheet.best/api/sheets/d0a46856-1a52-4f62-a69b-842f4c109266', imageData)
  //   .then(response => {
  //     console.log(response);
  //   })
}

export default () => {
  const [annotatorOpen, changeAnnotatorOpen] = useState(false)
  const [annotatorProps, changeAnnotatorProps] = useState(examples["Custom"]())
  const [lastOutput, changeLastOutput] = useState()
  const [selectedImageIndex, changeSelectedImageIndex] = useState(0)
  // const imagesLength = annotatorProps.images.length;
  // const images = annotatorProps.images

  return (
    <div>
      {annotatorOpen ? (
        <ErrorBoundaryDialog
          onClose={() => {
            changeAnnotatorOpen(false)
          }}
        >
          <Annotator
            {...(annotatorProps: any)}
            onExit={(output) => {
              // delete (output: any)["lastAction"]
              // changeLastOutput(output)
              // changeAnnotatorOpen(false)
              console.log(output.images)
              // let _images = output.images
              // for (let imageIndex = 0; imageIndex < _images.length; imageIndex++){
              //   let imageData = {}
              //   imageData['src'] = _images[imageIndex].src
              //   imageData['name'] = _images[imageIndex].name
              //   imageData['pixelSize'] = {'h': _images[imageIndex].pixelSize.h, 'w': _images[imageIndex].pixelSize.w}
                
              //   let _regions = _images[imageIndex].regions
              //   for (let regionNum = 0; regionNum < _regions.length; regionNum++){
              //     // console.log(_regions[regionNum])
              //     imageData['region'] = splitRegionData(_regions[regionNum])
              //   }
              //   sendData(imageData)
              // }
            }}
            onNextImage={() => {
              changeSelectedImageIndex((selectedImageIndex + 1) % annotatorProps.images.length)
            }}
            onPrevImage={() => {
              changeSelectedImageIndex((selectedImageIndex - 1 + annotatorProps.images.length) % annotatorProps.images.length)
            }}
            selectedImage={selectedImageIndex}
          />
        </ErrorBoundaryDialog>
      ) : (
        <Editor
          lastOutput={lastOutput}
          onOpenAnnotator={(props) => {
            changeAnnotatorProps(props)
            changeAnnotatorOpen(true)
          }}
        />
      )}
    </div>
  )
}
