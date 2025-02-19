export function Button() {
    function showalert() {
        alert("button clicked")
    }
    return (
        <>
            <button onClick={showalert}>Click</button>
            <button style={{ margin: "5px" }} onClick={() => {
                alert("ArrowFunction")
            }}>ArrowFunction</button>


        </>

    );
}
