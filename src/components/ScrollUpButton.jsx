import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <ScrollUpButton
                    AnimationDuration={495}
                />
            </div>
        );
    }
}