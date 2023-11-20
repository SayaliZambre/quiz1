import React from "react";
import "./profile.css";
import ProLeft from "./proLeft";
import ProRight from "./proRight";
import Navbar from "../../SharedComponents/navbar";

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="profile_main">
                <div className="profile">
                    <ProLeft />
                    <ProRight />
                </div>
            </div>
        </>
    );
}