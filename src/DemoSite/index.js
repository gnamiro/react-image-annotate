// @flow
import React, { useState } from "react"
import ReactDOM from "react-dom"
import Editor, { examples } from "./Editor"
import Annotator from "../Annotator"
import ErrorBoundaryDialog from "./ErrorBoundaryDialog.js"

export default () => {
  const [annotatorOpen, changeAnnotatorOpen] = useState(false)
  const [annotatorProps, changeAnnotatorProps] = useState(examples["Custom"]())
  const [lastOutput, changeLastOutput] = useState()
  const [selectedImageIndex, changeSelectedImageIndex] = useState(0)
  const imagesLength = annotatorProps.images.length;
  const images = annotatorProps.images

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
              delete (output: any)["lastAction"]
              changeLastOutput(output)
              changeAnnotatorOpen(false)
            }}
            onNextImage={() => {
              changeSelectedImageIndex((selectedImageIndex + 1) % imagesLength)
            }}
            onPrevImage={() => {
              changeSelectedImageIndex((selectedImageIndex - 1 + imagesLength) % imagesLength)
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
