// @flow

import React, { useRef, memo } from "react"
import SidebarBoxContainer from "../SidebarBoxContainer"
import DescriptionIcon from "@mui/icons-material/Description"
import { styled } from "@mui/material/styles"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import { grey } from "@mui/material/colors"
import Markdown from "react-markdown"


const theme = createTheme()
const MarkdownContainer = styled("div")(({ theme }) => ({
  paddingLeft: 16,
  paddingRight: 16,
  fontSize: 12,
  "& h1": { fontSize: 18 },
  "& h2": { fontSize: 14 },
  "& h3": { fontSize: 12 },
  "& h4": { fontSize: 12 },
  "& h5": { fontSize: 12 },
  "& h6": { fontSize: 12 },
  "& p": { fontSize: 12 },
  "& a": {},
  "& img": { width: "100%" },
}))


export const TaskDescriptionSidebarBox = ({ description, comment, onChange }) => {
  const commentInputRef = useRef(null)
  const onCommentInputClick = (_) => {
    // The TextField wraps the <input> tag with two divs
    const commentInput = commentInputRef.current.children[0].children[0]
    if (commentInput) return commentInput.focus()
  }
  return (
    <ThemeProvider theme={theme}>
      <SidebarBoxContainer
        title="Any Comment on Image ..."
        icon={<DescriptionIcon style={{ color: grey[700] }} />}
        expandedByDefault={description && description !== "" ? false : true}
      >
      <MarkdownContainer>
        <TextField      
          fullWidth
          multiline
          rows={6}
          ref={commentInputRef}
          onClick={onCommentInputClick}
          value={comment || ""}
          onChange={(event) => onChange(event.target.value)} //TODO Create some Close_comment_editor for creating comment part to each images
        />
        </MarkdownContainer>
      </SidebarBoxContainer>
    </ThemeProvider>
  )
}

export default memo(TaskDescriptionSidebarBox)
