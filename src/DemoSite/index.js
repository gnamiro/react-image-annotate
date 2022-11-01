// @flow
import React, { useState } from "react"
import ReactDOM from "react-dom"
import Editor, { examples } from "./Editor"
import Annotator from "../Annotator"
import ErrorBoundaryDialog from "./ErrorBoundaryDialog.js"

import {saveData, splitRegionData, getImageData} from '../utils/send-data-to-server'

const preprocessDataBeforeSend = (output) => {
  let _images = output.images
  for (let imageIndex = 0; imageIndex < _images.length; imageIndex++){
    let imageData = getImageData(_images[imageIndex])
    // imageData['src'] = _images[imageIndex].src
    // imageData['name'] = _images[imageIndex].name
    // imageData['cls'] = _images[imageIndex].selectedClsList || []
    // imageData['comment'] = _images[imageIndex].comment || ""
    // if (_images[imageIndex].pixelSize !== undefined)
    //   imageData['pixelSize'] = {'h': _images[imageIndex].pixelSize.h, 'w': _images[imageIndex].pixelSize.w}
    
    let _regions = _images[imageIndex].regions || []
    imageData['regions'] = [] 
    for (let regionNum = 0; regionNum < _regions.length; regionNum++){
      imageData['regions'].push(splitRegionData(_regions[regionNum]))
    }
    saveData(imageData)
    }
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
              preprocessDataBeforeSend(output)
            }}
            onNextImage={() => {
              console.log('******--******')
              annotatorProps.images[selectedImageIndex].processed = true;
              changeSelectedImageIndex((selectedImageIndex + 1) % annotatorProps.images.length)
            }}
            onPrevImage={() => {
              annotatorProps.images[selectedImageIndex].processed = true;
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
