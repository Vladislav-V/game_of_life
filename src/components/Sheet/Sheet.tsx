import React, {useState} from "react";
import {defaultState, iCells} from './defaultState';
import {Cell} from "../Cell/Cell";

export const Sheet:React.FC = () => {
    const [row, setRow] = useState(defaultState.row);
    const [col, setCol] = useState(defaultState.col);
    const [x, setX] = useState(defaultState.x);
    const [y, setY] = useState(defaultState.y);
    return(
        <section>
            {
                row.map((oCell: iCells, rIndex: number) =>
                    <section style={{display: "flex"}}>
                        {[
                            ...col.map((cell: iCells, cIndex: number) => {
                                let cellIndex = x * rIndex + cIndex;
                                return <Cell row={rIndex} key={cell.index} visible={cell.visible} index={cellIndex}/>
                            })
                        ]}
                    </section>
                )
            }
        </section>
    )
}