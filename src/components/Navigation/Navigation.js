import React from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
            // Move sign out to the right of the page
            <nav style={{display: "flex", justifyContent: "flex-end"}}>
                {/* Tachyons to style the sign out link */}
                <p className="f3 link dim white underlined pa3 pointer" onClick={() => onRouteChange('signin')} >Sign Out</p>
            </nav>
            );
        }
        else {
            return (
                <nav style={{display: "flex", justifyContent: "flex-end"}}>
                    {/* Tachyons to style the sign out link */}
                    <p className="f3 link dim white underlined pa3 pointer" onClick={() => onRouteChange('signin')} >Sign In</p>
                    <p className="f3 link dim white underlined pa3 pointer" onClick={() => onRouteChange('register')} >Register</p>
                </nav>
            );
        }
}

export default Navigation;