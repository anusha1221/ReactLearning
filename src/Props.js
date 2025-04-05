import PropTypes from "prop-types";

export function PropsExplanation() {
    const name = "anusha"; // Passed name
    const age = 34;        // Passed age

    return (
        <div>
            <h1>Parent Component</h1>
            {/* Passing props explicitly */}
            <PropsChildComponent name={name} age={age} />
            {/* Not passing props to use default values */}
        </div>
    );
}

export function PropsChildComponent(props) {
    return (
        <div>
            <h2>Child Component</h2>
            <h3>Hello {props.name}</h3>
            <p>{props.age}</p>
        </div>
    );
}

// Define default props for PropsChildComponent
PropsChildComponent.defaultProps = {
    name: "Guest", // Default name
    age: 0         // Default age
};

// Define prop types for PropsChildComponent
PropsChildComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};