import React, {useState} from "react";

export interface CellField {
    index : number,
    visible : boolean,
    row: number,
}

export const sum = (a:number, b:number):number => a + b
export const Cell = (props:CellField) => {
    const [visible, setVisible] = useState(props.visible)
    const handlerCellClick = () => {
        setVisible(!visible)
    }
    return(
        <div style={
                {
                    display: "flex",
                    width: "20px",
                    height: "20px",
                    border: "1px solid",
                    alignItems: "center",
                    justifyContent: "center"
                }
            }
             onClick={handlerCellClick}>{visible && props.index}</div>
    )
}