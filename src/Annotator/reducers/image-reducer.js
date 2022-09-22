// @flow

import type {
  MainLayoutImageAnnotationState,
  Action,
} from "../../MainLayout/types"
import { setIn } from "seamless-immutable"
import getActiveImage from "./get-active-image"
import { convertLength } from "@mui/material/styles/cssUtils"

export default (state: MainLayoutImageAnnotationState, action: Action) => {
  const { currentImageIndex, pathToActiveImage, activeImage } =
    getActiveImage(state)
    // console.log(state)
  switch (action.type) {
    case "IMAGE_OR_VIDEO_LOADED": {
      return setIn(state, ["images", currentImageIndex, "pixelSize"], {
        w: action.metadata.naturalWidth,
        h: action.metadata.naturalHeight,
      })
    }
  }
  return state
}
