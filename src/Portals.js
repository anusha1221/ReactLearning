import React, { useState } from 'react';
import ReactDOM, { createPortal } from 'react-dom';
import './Portals.css';
import './App.css';

function Modal(props) {

    return (
        createPortal(
            <>
                <div className='modal-overlay'>
                    <div className='content'>
                        <h1>Modal heading</h1>
                        <p>This is modal content click to close the modal</p>
                        <button onClick={props.close} >Close</button>
                    </div>
                </div>
            </>,
            document.getElementById('portal-root') // Ensure this element exists in your HTML
        )
    )
}
export function Portals() {
    const [showModal, setShowModal] = useState(false);

    function toogleModal() {
        setShowModal(!showModal);
    }

    return (

        <div >
            <button className='btn btn-primary m-4' onClick={toogleModal}>Show Modal</button>
            {showModal && <Modal close={toogleModal} />}
        </div>


    )
}