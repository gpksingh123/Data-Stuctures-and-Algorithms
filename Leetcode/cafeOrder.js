/* eslint-disable */
/*
I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe.
All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.
    -The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
    -The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
    -Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
*/

function cafeOrder(takeOutOrders, dineInOrders, servedOrders) {
    let p1 = 0
    let p2 = 0
    let p3 = 0

    while ((p1 < takeOutOrders.length) || (p2 < dineInOrders.length) || (p3 < servedOrders.length)) {
        currentTakeOutOrder = takeOutOrders[p1]
        currentDineInOrder = dineInOrders[p2]
        currentServeredOrder = servedOrders[p3]

        console.log("------------------------------")
        console.log("Take out: ",currentTakeOutOrder)
        console.log("Dine in: ", currentDineInOrder)
        console.log("Served", currentServeredOrder)

        if (currentTakeOutOrder && currentTakeOutOrder === currentServeredOrder) {
            p1++
            p3++
        } else if (currentDineInOrder && currentDineInOrder === currentServeredOrder) {
            p2++
            p3++
        } else {
            return false
        }
        console.log(p1,p2,p3)
        console.log("Stopping condition ",((p2 < dineInOrders.length - 1)))
    }

    return true
}
// let takeOut1 = [1, 3, 5] 
// let dineIn1 =  [2, 4, 6] 
// let served1 =  [1, 2, 4, 6, 5, 3] 
// console.log(cafeOrder(takeOut1, dineIn1, served1))

let takeOut2 = [17, 8, 24]
//                     p1
let dineIn2 =  [12, 19, 2]
//                  p2
let served2 =  [17, 8, 12, 19, 24, 2]
//                         p3
console.log(cafeOrder(takeOut2, dineIn2, served2))