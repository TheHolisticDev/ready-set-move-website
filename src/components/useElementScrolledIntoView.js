// @flow
import { useState, useCallback } from "react"
import useScrollListener from "@formoe/use-scroll-listener"

export const REFERENCE_POINTS = {
  top: "TOP",
  bottom: "BOTTOM",
  middle: "MIDDLE",
}

type Params = {|
  element: ?HTMLElement,
  referencePoint?: "TOP" | "BOTTOM" | "MIDDLE",
  offset?: number,
|}

export const useElementScrolledIntoView = ({
  element,
  referencePoint = REFERENCE_POINTS.top,
  offset = 0,
}: Params): boolean => {
  const [scrolledToElement, setScrolledToElement] = useState(false)

  const handleScroll = useCallback(() => {
    if (!element || !document.documentElement) {
      return
    }
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight

    let elementPoint
    switch (referencePoint) {
      case REFERENCE_POINTS.bottom:
        elementPoint = element.getBoundingClientRect().bottom
        break
      case REFERENCE_POINTS.middle:
        elementPoint =
          element.getBoundingClientRect().top +
          element.getBoundingClientRect().height / 2
        break
      default:
        elementPoint = element.getBoundingClientRect().top
        break
    }

    if (elementPoint + offset <= windowHeight) {
      setScrolledToElement(true)
    }
    if (elementPoint + offset > windowHeight) {
      setScrolledToElement(false)
    }
  }, [element, offset, referencePoint])

  useScrollListener({ handleScroll })

  return scrolledToElement
}
