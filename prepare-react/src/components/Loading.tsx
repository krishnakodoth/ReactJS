import React from 'react';
import './Loading.css';

function Loading() {
    return (
        <section className='app-loader'>
            <div className='bouncing-loader'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}

export default Loading;
