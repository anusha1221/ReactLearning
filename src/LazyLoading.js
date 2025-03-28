import { lazy, Suspense, useState } from 'react';

const LazyLogin = lazy(() => import('./Login'))

export function LazyLoading() {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="text-center">
                <h4> LazyLoading</h4>
                <button className="btn btn-primary" onClick={() => setShow(true)}>Click Me</button>
            </div>
            {show === true && <Suspense fallback={<div>Loading...</div>}>
                <LazyLogin />
            </Suspense>}
        </>
    )
}