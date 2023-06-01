import React from 'react';
import Calendario from './Calendario';

function StoreCourse() {
    return (
        <div className="container-calendary">
            <div className="calendary">
                <h2>Elija una fecha</h2>
                <Calendario/>
            </div>
        </div>
    )
}

export default StoreCourse