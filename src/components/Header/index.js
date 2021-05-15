import React from "react";

function Header(props) {
    return (
        <div className="header">
            {props.children}
        </div>
    );
}

export default Header;
