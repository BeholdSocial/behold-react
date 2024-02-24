"use client"
import { useEffect, useRef } from "react"

/**
 * @component
 * @property {string} feedId Behold feed ID. Can be found in the [Behold dashboard](https://app.behold.so) by opening a widget feed and clicking on "Embed Code"
 * @property {function} [onLoad] Function to run after initial render
 */
function BeholdWidget(props: { feedId: string; onLoad?: Function }) {
  const ref = useRef(null)

  useEffect(() => {
    // if (ref.current) {
    //   ref.current.addEventListener("load", () => {
    //     if (props.onLoad) props.onLoad()
    //   })
    // }
    const existingScriptEl = document.querySelector(
      '[src="https://w.behold.so/widget.js"]'
    )
    if (existingScriptEl || customElements.get("behold-widget")) return

    const scriptEl = document.createElement("script")
    scriptEl.src = "https://w.behold.so/widget.js"
    scriptEl.type = "module"
    document.body.appendChild(scriptEl)
  }, [])

  return (
    <behold-widget
      ref={ref}
      onLoad={() => {
        if (props.onLoad) props.onLoad()
      }}
      feed-id={props.feedId}
    />
  )
}

export default BeholdWidget

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": {
        "feed-id": string
        onLoad?: Function
        ref: React.MutableRefObject<HTMLElement | null>
      }
    }
  }
}
