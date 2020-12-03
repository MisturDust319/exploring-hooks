import React, { useState } from "react";

const Button = () => {
    const [buttonText, setButtonText] = useState("Click me!");
    // this is a hook
    // it takes an argument, and returns two values
    // the argument sets its initial state
    // the first variable it returns holds the value of the hook
    // the second is a function that can be used to change the hook value

    return (
        <button onClick={() => setButtonText("Thanks for clicking!")}>
            {buttonText}
        </button>
    )
}

export default Button;