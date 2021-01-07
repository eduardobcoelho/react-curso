import ReactDOM from 'react-dom'
import React from 'react'

const strongString = <strong>Olá React!!!</strong>

ReactDOM.render(
    <div>
        { strongString }
    </div>, 
    document.getElementById('root')
)