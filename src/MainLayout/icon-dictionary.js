// @flow

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

import { BiShapeCircle } from "react-icons/bi";
import {
  faArrowsAlt,
  faMousePointer,
  faExpandArrowsAlt,
  faGripLines,
  faTag,
  faPaintBrush,
  faCrosshairs,
  faDrawPolygon,
  faVectorSquare,
  faHandPaper,
  faSearch,
  faMask,
  faEdit,
  faChartLine,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew"

const faStyle = { marginTop: 4, width: 16, height: 16, marginBottom: 4 }

library.add(fas, faTwitter, faFontAwesome)

export const iconDictionary = {
  select: () => (
    <FontAwesomeIcon
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faMousePointer}
    />
  ),
  pan: () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faHandPaper} />
  ),
  zoom: () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faSearch} />
  ),
  "show-tags": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faTag} />
  ),
  "create-point": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faCrosshairs} />
  ),
  "create-box": () => (
    <FontAwesomeIcon
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faVectorSquare}
    />
  ),
  "create-circle": () => (
    // <FontAwesomeIcon
    //   style={faStyle}
    //   size="xs"
    //   fixedWidth
    //   icon={faShareNodes}
    //   />
      <BiShapeCircle style={faStyle} />
      
      
  ),
  "create-polygon": () => (
    <FontAwesomeIcon
      style={faStyle}
      size="xs"
      fixedWidth
      icon={faDrawPolygon}
    />
  ),
  "create-expanding-line": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faGripLines} />
  ),
  "create-line": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faChartLine} />
  ),
  "show-mask": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faMask} />
  ),
  "modify-allowed-area": () => (
    <FontAwesomeIcon style={faStyle} size="xs" fixedWidth icon={faEdit} />
  ),
  "create-keypoints": AccessibilityNewIcon,
  window: FullscreenIcon,
}

export default iconDictionary
