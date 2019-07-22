import { Override } from "framer"

export function Scale(): Override {
    return {
        onzoomend: event => {
            console.log("onzoomend")
            console.log(event.target.getCenter())
            console.log(event.target.getBounds())
        },
        onmoveend: () => {
            console.log("onmoveend")
        },
    }
}
