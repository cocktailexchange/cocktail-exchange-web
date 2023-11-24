import * as React from 'react';
import './loading-splash.css';
import {Oval} from "react-loader-spinner";
import FadeIn from 'react-fade-in';

// TODO Make sure always shows up on top - duplicate project doesn't

export default function LoadingSplash() {
    return <FadeIn delay={150} transitionDuration={400}>
        <div className="loading-splash">
            <Oval color="grey" secondaryColor={"#999999"} strokeWidth={1} />
        </div>
    </FadeIn>
}
