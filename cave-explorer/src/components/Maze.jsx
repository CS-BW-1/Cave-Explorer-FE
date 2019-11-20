import React from "react"
import { StyledGrid } from "./ComponentStyles/ComponentStyle"

const { min } = Math

const showGrid = dir => (dir ? "1px solid #f8f8ff" : "1px solid #1b1e23")

export const Maze = ({ maze }) => (
    <StyledGrid>
        {maze.map(row =>
            row.map(({ x, y, top, left, right, bottom }) => (
                <div
                    key={`${x}-${y}`}
                    style={{
                        gridColumn: `${min(x + 1, 30)} / span 1`,
                        gridRow: `${min(y + 1, 30)}/ span 1`,
                        borderRight: showGrid(right),
                        borderLeft: showGrid(left),
                        borderTop: showGrid(top),
                        borderBottom: showGrid(bottom),
                    }}
                />
            ))
        )}
    </StyledGrid>
)