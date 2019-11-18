import React from "react"
import { StyledPlayer } from "./ComponentStyles/ComponentStyle"

const { min } = Math

export const Player = ({ x = 0, y = 0 }) => {
    return (
        <StyledPlayer style={{ gridColumn: min(x + 1, 30), gridRow: min(y + 1, 30) }} />
    )
}

