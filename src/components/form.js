import React from "react";


const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="City to English (ex: London)" />
        <button>Show Weather</button>
    </form>
);

export default Form;