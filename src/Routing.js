import { Home } from "./Home"
import { About } from "./About"
import { Login } from "./Login"
import { User } from "./User"
import { Orders } from "./Orders"
import { Profile } from "./Profile"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
//header navigationlink component
function Header() {
    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="login">Login</Link></li >
            <li><Link to="user">User</Link></li >
        </ul>
    )
}
//Header configuring route component
export function Routing() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="login" element={<Login />} />
                    <Route path="user" element={<User />} >
                        <Route path="orders" element={<Orders />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}