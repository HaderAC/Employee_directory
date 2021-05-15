import React from "react";

function Header(props) {
    return (
        <div className="header" style={{backgroundColor: props.bg ? props.bg : "rgb(111, 0, 255)", color: props.text_color ? props.text_color: "yellow" }}>
            {props.children}
        </div>
    );
}

export default Header;
