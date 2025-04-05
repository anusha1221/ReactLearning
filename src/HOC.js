function AuthCheck(Component) {
    let authenticated = true;
    return (props) => {
        if (authenticated) {
            return <Component {...props} />
        } else {
            return <Login />
        }
    }
}

function User(props) {
    return (
        <div>
            <h1>User Component</h1>
            <h2>Hello {props.username}</h2>
        </div>
    )
}

function Login() {
    return (
        <div>
            <h1>Login Component</h1>
        </div>
    )
}
// Define and export the HigherOrderComponent component

const AuthChecked = AuthCheck(User)
export function HigherOrderComponent() {
    return (
        <>
            <AuthChecked username={"Anusha"} />
        </>
    )
}

// Define the Higher-Order Component
function withGreeting(WrappedComponent) {
    // return function EnhancedComponent(props) 
    return (props) => {
        return (
            <div>
                <h2>Welcome to the App!</h2>
                <WrappedComponent {...props} />
            </div>
        );
    };

}


// Define a simple component
function User1(props) {
    return <h3>Hello, {props.name}!</h3>;
}

// Wrap the User component with the HOC
const UserWithGreeting = withGreeting(User1);

// Export a component to render the enhanced component
export function SimpleHOCExample() {
    return <UserWithGreeting name="Anusha" />;
}