import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../subcomponents";
import { Editor, EditorState } from "draft-js";
import "../../../node_modules/draft-js/dist/Draft.css";
import "./blogEditor.css";
import "../layout.css";

const BlogEditor = (props) => {
  const { userId, email, userType } = useSelector((store) => store.user);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (props.match.params.draftInfo) {
      const params = props.match.params.draftInfo.split("-");
      const draftId = params[params.length - 1];
      console.log(draftId);
    }
  }, []);

  return (
    <div style={{ height: "500px", width: "1000px" }}>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
};

export default BlogEditor;
