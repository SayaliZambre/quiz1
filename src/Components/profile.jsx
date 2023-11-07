import React from "react";
import "./profile.css";
import ProLeft from "./proLeft";
import ProRight from "./proRight";

export default function Profile () {
    return (
        <div className="profile">
            <ProLeft />
            <ProRight />
        </div>
    );
}