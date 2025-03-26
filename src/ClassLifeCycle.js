import React from 'react';
import ChildLifeCycle from './ChildLifeCycle';

// Define and export the LifeCycle component
class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        // Initialize state with a property x set to 10
        this.state = {
            x: 10
        }
    }
    static getDerivedStateFromProps(props, state) {
        // Log a message to the console to indicate that the method has been called
        console.log("getDerivedStateFromProps");
        // Return null to indicate no change to state
        return null;
    }
    render() {
        return (
            <>
                {/* Display a heading */}
                <h1>Component Life Cycle Methods</h1>
                <ChildLifeCycle data={this.state.x} />
                {/* Button to increment x by 10 on click */}
                <button onClick={() => { this.setState({ x: this.state.x + 10 }) }}>OnClickIncrement</button>
            </>
        )
    }
}

// Export the LifeCycle component as the default export
export default LifeCycle