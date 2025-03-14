import { useRef } from "react"

// Component to demonstrate useRef hook
export function Reference() {
    // Initialize ref with an empty array
    let headings = useRef([])

    // Function to change the style of the first heading
    function changeh1style() {
        headings.current[0].style.color = 'red'
    }

    return (
        <div>
            {/* Assign refs to headings and add onClick event to the first heading */}
            <h1 ref={(el) => { headings.current[0] = el }}
                onClick={() => { changeh1style() }}>This is heading1</h1>
            <h1 ref={(el) => headings.current[1] = el}>This is heading2</h1>
            <h1 ref={(el) => headings.current[2] = el}>This is heading3</h1>
        </div>
    )
}