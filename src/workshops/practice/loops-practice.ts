export function numberPrinter(numberToPrint: number) {
    const numberList = ["one","two","three","four","five","six","seven","eight","nine", "ten"];
    let stringNumber = "Not found"
    for(let i = 0; i < numberList.length; i++) {
        if((i + 1) === numberToPrint) {
            stringNumber = numberList[i];
        }
    }
    return stringNumber;
}