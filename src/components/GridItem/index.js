import React from "react";
import * as C from "./style"

const GridItem = ({item, onDelete }) => {
    return(
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (<C.Label>Despesa</C.Label>) : (<C.Label color={'g'}>Receita</C.Label>)}
            </C.Td>
            <C.Td alignCenter>
                <C.Button onClick={() => onDelete(item.id)}>Deletar</C.Button>
            </C.Td>
        </C.Tr>
    )
}

export default GridItem;