import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

export default class Index extends React.Component {
    render() {
        return (
            <div className="scroll-top">
                <ScrollUpButton
                    EasingType="easeOutQuad"
                    AnimationDuration={300}
                />
            </div>
        );
    }
}