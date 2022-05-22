import moment from "moment"
import "moment-precise-range-plugin"

export function calculateSumOfNumbers (numbers) {
    let result = 0
    for(let i = 0;i<numbers.length; i++){
   result += Number(numbers[i])
}
return result

} 

export function getFormattedTime (date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')

}