import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../layout.css";

function Vision() {
  return (
    <div className="flex-column-start-center description-column">
      <div className="flex-row-start-start tag-line-header description-header">
        We do things Differently
      </div>
      <div className="flex-row-end-center tag-line-sub description">
        {"Zero risk.\nZero upfront costs.\n"}
      </div>
    </div>
  );
}

export default Vision;
