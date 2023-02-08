import React from "react";
import * as C from "./style"

const GridItem = ({item, onDelete }) => {
    return(
        <C.Tr>
            <C.Td>{item.desc}</C.Td>
            <C.Td>{item.amount}</C.Td>
            <C.Td alignCenter>
                {item.expense ? (<button>Despesa</button>) : (<button>Receita</button>)}
            </C.Td>
            <C.Td alignCenter>
                <button onClick={() => onDelete(item.id)}>Deletar</button>
            </C.Td>
        </C.Tr>
    )
}

export default GridItem;