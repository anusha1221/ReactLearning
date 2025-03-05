import './Calculator.css'
import Keypad from "./Keypad"
function Calculator() {
    return (
        <div className="container">
            <h1>Calculator App Using React</h1>
            <div className="calculator">
                <input type="text" className="output" />
            </div>
        </div>
    )
}
export default Calculator