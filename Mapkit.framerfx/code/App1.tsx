import { Override, Data } from "framer"

const data = Data({
    longitude: 0,
})

export function Show(): Override {
    return {
        text: data.longitude,
    }
}

export function Scale(): Override {
    return {
        onzoomend: event => {
            console.log("onzoomend")
            console.log(event.target.getCenter())
            console.log(event.target.getBounds())
            data.longitude = event.target.getBounds()._northEast.lng
        },
        onmoveend: event => {
            console.log("onmoveend")
            data.longitude = event.target.getBounds()._northEast.lng
        },
    }
}
