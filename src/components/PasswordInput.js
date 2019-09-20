import React from "react";

/**
 * Exercise
 * Change the background-color of the input based
 * on the length of the password
 * At a length of 0-4 it should be a red to orange
 * At a length of around 10 it should become green
 * It should never become blue, so stop at green
 */

// function getInputStyle(length) {
//   const hue = length * 10;
//   return {
//     backgroundColor: `hsl(${hue > 120 ? 120 : hue}, 100%, 50%)`
//   };
// }
function PasswordInput({ onChange, value }) {
  const passwordLength = value.length;
  const inputStyle = {
    background: `hsl(${Math.min(passwordLength * 10, 120)}, 100%, 50%)`
  };

  return (
    <div>
      <input
        className="password-input"
        type="password"
        value={value}
        style={inputStyle}
        onChange={event => {
          onChange(event.target.value);
        }}
      />
      {passwordLength}
    </div>
  );
}
export default PasswordInput;

// How to change the background color ?
// How to access the input value (password) ?
// How should a function look like which returns the color based on password length ?
// Why does it make sense to use CMYK ?
// ...

// onChange={event => {
//   (setPassword(event.target.value))},
// }
