function woodQuantity( chairQuantity,bedQuantity,tableQuantity){
    const perChairWood = 40;
    const perBedWood = 8;
    const perTableWood = 20;
   const totalChairWood = perChairWood*chairQuantity
   const totalBedWood = perBedWood*bedQuantity
   const totalTableWood = perTableWood*tableQuantity
   const totalWood = totalChairWood + totalBedWood + tableQuantity;
   return totalWood;
}
const totalWood = woodQuantity(50,25,30);
console.log(totalWood);

/** shirt price --->500
 * pant price ----> 750
 * shoe price ----> 950
 */
function shapingQuantity(shirtQuantity,pantQuantity,shoeQuantity){
    const preShirtPrice = 500;
    const prePantPrice = 750;
    const preShoePrice = 950;
    const totalShirt = preShirtPrice* shirtQuantity;
    const totalPant = prePantPrice * pantQuantity;
    const totalShoe = preShoePrice * shoeQuantity;
    const totalShapingPrice = totalShirt + totalPant + totalShoe;
 return totalShapingPrice;
}
const totalQuantity = shapingQuantity(30,15,5);
console.log(totalQuantity)