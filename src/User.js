import { Link, Outlet } from "react-router-dom"
export function User() {
    return (
        <>
            <div>
                <button className="btn btn-dark">
                    <Link to="orders">Orders
                    </Link>
                </button>
                <button className="btn btn-dark">
                    <Link to="profile">profile
                    </Link>
                </button>
            </div>
            <h1>This is User component </h1>
            <h1>This is nested routing </h1>
            <Outlet />

        </>
    )
}