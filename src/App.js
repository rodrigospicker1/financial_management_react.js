import React from "react"
import { A } from "styled-icons/fa-solid"
import Global from "./styles/global"
import Header from "./components/Header/index.js"
import Resume from "./components/Resume"

const App = () => {
    return (
    <div>
        <Header />
        <Resume />
        <Global />
    </div>
    )
}

export default App;