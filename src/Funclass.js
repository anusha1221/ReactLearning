import React from 'react';
import ReactDOM from 'react-dom/client';

// Functional Component
export const FunctionalComponent = () => {
    return <p>This is a Functional Component</p>;
};

// Class Component


class ClassComponent extends React.Component {
    render() {
        return <p>This is a Class Component</p>;
    }
}

// Combination Component (Combining both)
const Combination = () => {
    return (
        <div>
            <h2>Rendering Functional & Class Components Together</h2>
            <FunctionalComponent />
            <ClassComponent />
        </div>
    );
};

export default Combination