import React from 'react';
import { StyledDashBoard } from './ComponentStyles/ComponentStyle'

export const Dashboard = ({ directions }) => {
    console.log("Dashboard Directions:", directions);
    return (
        <StyledDashBoard>
            <h1>Dashboard</h1>
            <h3>Welcome {directions ? directions.name : null}</h3>
            <div>
                <h3>Current Room</h3>
                <h4>{directions ? directions.title : null}</h4>
            </div>
            <div>
                <h3>Description</h3>
                <h4>{directions ? directions.description : null}</h4>
            </div>
            {directions.error_msg && <span>{directions.error_msg}</span>}
            <button
                onClick={() => {
                    localStorage.clear();
                    window.location.reload()
                }}
            >
                Logout
      </button>
        </StyledDashBoard>
    );
};

