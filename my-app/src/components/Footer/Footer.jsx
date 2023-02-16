import React from "react";
import CountUp from 'react-countup';

function Footer(props) {
    return (
        <div style={{ backgroundColor: 'green' }}>
            <CountUp start={0} end={20} delay={2}>
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp>
        </div>
    );
}

export default Footer