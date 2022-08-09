// @flow

import React from "react"
import ReactDOM from "react-dom"
import Theme from "./Theme"
import DemoSite from "./DemoSite"
import LandingPage from "./LandingPage"
import "./site.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

const Site = () => {
  const path = window.location.pathname
    .replace(/\/$/, "")
    .split("/")
    .slice(-1)[0]
  return <Theme>{path === "demo" ? <DemoSite /> : <LandingPage />}</Theme>
}

ReactDOM.render(<Site />, document.getElementById("root"))
