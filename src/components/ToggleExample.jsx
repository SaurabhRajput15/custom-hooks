import React from 'react';
import useToggle from '../customHooks/useToggle';

const ToggleExample = () => {
    const [isVisible, toggleVisibility] = useToggle()

    return(
        <div>
            <button onClick={toggleVisibility}>{isVisible ? "Hide" : "Show"}</button>
            {isVisible && <h3>Hello! I’m now visible.</h3>}
        </div>
    )
}

export default ToggleExample;
