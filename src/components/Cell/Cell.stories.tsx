import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Cell, CellField} from "./Cell";

export default {
    component: Cell,
    title: 'Cell',
} as Meta

// const visibleCellArgs = {
//     index : 5,
//     visible : true,
//     row: 3
// }
export const Template: Story<CellField> = (args) => <Cell {...args}/>
// export const Visible: Story<CellField> = (args) => <Cell {...visibleCellArgs}/>

// const hideCellArgs = Visible.bind({})
export const Visible = Template.bind({})
Visible.args = {
    index : 5,
    visible : true,
    row: 3
};

export const Hide = Template.bind({})
Hide.args = {
    index : 5,
    visible : false,
    row: 3
};