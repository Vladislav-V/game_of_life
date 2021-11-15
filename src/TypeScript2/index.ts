// type FIXME = any;

// const orderStates = [
//     "initial",
//     "inWork",
//     "buyingSupplies",
//     "producing",
//     "fullfilled",
// ] as const;
//
// type OrderState = typeof orderStates[number];
// type FIXME = OrderState[]
//
// export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
//     const filteredStates = [] as FIXME;
//     orderStates.forEach((element) => {
//         if (element !== "buyingSupplies" && element !== "producing") {
//             filteredStates.push(element);
//         }
//     });
//     return filteredStates;
// };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = Order['state']
type Order =
    | {
    state: "initial";
    sum: number;
}
    | {
    state: "inWork";
    sum: number;
    workerId: number;
}
    | {
    state: "buyingSupplies";
    sum: number;
    workerId: number;
    suppliesSum: number;
}
    | {
    state: "producing";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
}
    | {
    state: "fullfilled";
    sum: number;
    workerId: number;
    suppliesSum: number;
    produceEstimate: Date;
    fullfillmentDate: Date;
};


export const getOrderState = (order: Order): FIXME => order.state;