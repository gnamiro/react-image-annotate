import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Box from "@mui/material/Box"
import * as muiColors from "@mui/material/colors"
import SidebarBoxContainer from "../SidebarBoxContainer"
import colors from "../colors"
import BallotIcon from "@mui/icons-material/Ballot"
import capitalize from "lodash/capitalize"
import classnames from "classnames"

const theme = createTheme()
const LabelContainer = styled("div")(({ theme }) => ({
  display: "flex",
  paddingTop: 4,
  paddingBottom: 4,
  paddingLeft: 16,
  paddingRight: 16,
  alignItems: "center",
  cursor: "pointer",
  opacity: 0.7,
  backgroundColor: "#fff",
  "&:hover": {
    opacity: 1,
  },
  "&.selected": {
    opacity: 1,
    fontWeight: "bold",
  },
}))
const Circle = styled("div")(({ theme }) => ({
  width: 12,
  height: 12,
  borderRadius: 12,
  marginRight: 8,
}))
const Label = styled("div")(({ theme }) => ({
  fontSize: 11,
  marginLeft: 2
}))
const DashSep = styled("div")(({ theme }) => ({
  flexGrow: 1,
  borderBottom: `2px dotted ${muiColors.grey[300]}`,
  marginLeft: 8,
  marginRight: 8,
}))
const Number = styled("div")(({ theme }) => ({
  fontSize: 11,
  textAlign: "center",
  minWidth: 14,
  paddingTop: 2,
  paddingBottom: 2,
  fontWeight: "bold",
  color: muiColors.grey[700],
}))

export const ClassSelectionMenu = ({
  selectedCls,
  regionClsList,
  activeClsList,
  onSelectCls,
}) => {

  // const [regionsStatus, setRegionsStatus] = useState(regionStatus)

  useEffect(() => {
    const keyMapping = {}
    for (let i = 0; i < 9 && i < regionClsList.length; i++) {
      keyMapping[i + 1] = () => handleClickLabel(regionClsList[i])
    }

    const onKeyDown = (e) => {
      if (keyMapping[e.key]) {
        keyMapping[e.key]()
        e.preventDefault()
        e.stopPropagation()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [regionClsList, selectedCls])

  const handleClickLabel = (label) => {
    //https://dev.to/shareef/how-to-work-with-arrays-in-reactjs-usestate-4cmi
    //https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd
    //https://blog.logrocket.com/building-custom-checkbox-react/

    // const labelIndex = getLabelIndex(label)
    // setRegionsStatus(
    //   regionsStatus.map((region) => region.label === label ? {...region, status: !region.status}:{...region})
    // )
    onSelectCls(label)
  }
  // const getLabelIndex = (label) => {
  //   for(let i = 0; i < regionStatus.length; i++){
  //     console.log(regionStatus[i])
  //     if(regionStatus[i].label === label)
  //       return i
  //   }
    
  //   return null;
  // }
  return (
    <ThemeProvider theme={theme}>
      <SidebarBoxContainer
        title="Classifications"
        subTitle=""
        icon={<BallotIcon style={{ color: muiColors.grey[700] }} />}
        expandedByDefault
      >
        {regionClsList.map((label, index) => (
          <LabelContainer
            className={classnames({ selected: label === selectedCls })}
            onClick={() => {handleClickLabel(label)}}
          >
            {/* <Circle // TODO: add checkbox right here
              style={{ backgroundColor: colors[index % colors.length] }}
            /> */}
            <input type="checkbox" checked={activeClsList.indexOf(label) !== -1}/>
            <Label className={classnames({ selected: label === selectedCls })} style={{ backgroundColor: colors[index % colors.length] }}>
              {capitalize(label)}
            </Label>
            <DashSep />
            <Number className={classnames({ selected: label === selectedCls })}>
              {index < 9 ? `Key [${index + 1}]` : ""}
            </Number>
          </LabelContainer>
        ))}
        <Box pb={2} />
      </SidebarBoxContainer>
    </ThemeProvider>
  )
}

export default ClassSelectionMenu
