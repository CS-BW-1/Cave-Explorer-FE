import React from "react"
import { StyledGrid } from "./ComponentStyles/ComponentStyle"

const { min } = Math

const showGrid = dir => (dir ? "1px solid #f8f8ff" : "1px solid #1b1e23")

export const Maze = ({ maze }) => (
    <StyledGrid>
        {maze.map(row =>
            row.map(({ x, y, n_to, w_to, e_to, s_to }) => (
                <div
                    key={`${x}-${y}`}
                    style={{
                        gridColumn: `${min(x + 1, 30)}  / span 1`,
                        gridRow: `${min(y + 1, 30)} / span 1`,
                        borderRight: showGrid(Boolean(e_to)),
                        borderLeft: showGrid(Boolean(w_to)),
                        borderTop: showGrid(Boolean(n_to)),
                        borderBottom: showGrid(Boolean(s_to)),
                    }}
                />
            ))
        )}
    </StyledGrid>
)