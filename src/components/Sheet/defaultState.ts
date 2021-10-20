export interface iCells {
    index : number,
    row: number,
    visible : boolean,
}

export interface DefaultStateType {
    // qCells : iCells[],
    row: iCells[],
    col: iCells[],
    x: number,
    y: number,
}

export const initialState = (w: number, h:number) : DefaultStateType =>{
    const row:iCells[] = [];
    const col:iCells[] = [];
    const cellArr: iCells[] = [];
    for(let i = 1; i <= h; i++){
            row.push({index: 0, visible: false, row: i})
    }
    for(let j = 1; j <= w; j++){
        col.push({index: j, visible: false, row: j})
    }

    const data = {
        row,
        col,
        x: w,
        y: h,
    }
    return data
}
export const defaultState : DefaultStateType = initialState(5, 5)