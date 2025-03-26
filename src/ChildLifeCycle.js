import React from 'react';
class ChildLifeCycle extends React.Component {
    constructor(props) {
        super(props)
        console.log('ChildLifeCycle constructor');
        this.state = {
            count: this.props.data + 10
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ChildLifeCycle getDerivedStateFromProps');
        return null;
    }
    componentDidMount() {
        console.log('ChildLifeCycle componentDidMount');
    }

    render() {
        console.log('ChildLifeCycle render');
        return (
            <>
                <div>ChildLifeCycle</div>
                <p>state: {this.state.count}</p>
                <p>count: {this.props.data + 10}</p>
            </>
        )

    }
}
export default ChildLifeCycle;