import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="leftBar">
                    <span className="logo">AaronDev</span>
                </div>
                <div className="rightBar">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <div className="topbarUserPhoto">
                        <img
                            src="https://icon-library.com/images/user-image-icon/user-image-icon-18.jpg"
                            alt="userImg"
                            className="userImg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
