import React from "react"
import ReactDom from "react-dom"
import "./styles.css"

const sum = (a,b) => {
    return a + b
}

const primeiroJSX = () => {
    return (
        <div className="teste" >Bruno carneiro - Introdução ao ReactJS
        <h1>Soma: {sum(10,20)}</h1>
        </div>
    )
}
const App = () => {
    
    return (
        <div className="App">
            Hello World

            {primeiroJSX()}

            
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDom.render(<App />, rootElement)