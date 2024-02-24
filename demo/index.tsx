import React, { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import BeholdWidget from "../dist/index.js"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement as HTMLElement)

root.render(
  <StrictMode>
    <BeholdWidget
      onLoad={() => console.log("React load event")}
      feedId="L7mnQCHvZeMZLbNXmJll"
    />
  </StrictMode>
)
