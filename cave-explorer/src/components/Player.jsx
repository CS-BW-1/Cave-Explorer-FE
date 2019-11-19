import React from "react"
import { StyledPlayer } from "./ComponentStyles/ComponentStyle"

const { min } = Math

export const Player = ({ x = 0, y = 0 }) => {
    return (
        <StyledPlayer style={{ gridColumn: min(x + 1, 10), gridRow: min(y + 1, 10) }} />
    )
}

