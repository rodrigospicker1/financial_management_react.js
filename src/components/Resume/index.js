import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./style";

const Resume = () => {
    return(
        <C.Container>
            <ResumeItem title="Entradas" value="1000" />
            <ResumeItem title="Saídas" value="1000" />
            <ResumeItem title="Total" value="1000"/>
        </C.Container>
    );
};

export default Resume;