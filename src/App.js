import React from "react"
import { A } from "styled-icons/fa-solid"
import Global from "./styles/global"
import Header from "./components/Header/index.js"
import Resume from "./components/Resume"
import Form from "./components/Form"

const App = () => {
    return (
    <div>
        <Header />
        <Resume />
        <Form />
        <Global />
    </div>
    )
}

export default App;