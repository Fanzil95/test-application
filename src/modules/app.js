import {DonateForm} from './donate-form'
import {DonateList} from './donate-list'
import { calculateSumOfNumbers as sumNumbers} from '../core/utils';
import { getFormattedTime } from '../core/utils';
const mockDonates = [
    { amount: 4, date: getFormattedTime(new Date()) },
    { amount: 20, date: getFormattedTime(new Date()) },
    { amount: 3, date: getFormattedTime(new Date()) },
    { amount: 1, date: getFormattedTime(new Date()) },
  ];
export default class App {
    #donateForm
    #donateList
    constructor(){
        const allItem = sumNumbers(mockDonates.map((item)=>item.amount))
        this.state = {
            donates: mockDonates,
            totalAmount: allItem,
        }
        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        this.#donateList = new DonateList(this.state.donates)
    }
    run(){
        const donateFormHTML = this.#donateForm
        const donateListHTML = this.#donateList
        document.body.append(donateFormHTML.render(), donateListHTML.render())
    }
    createNewDonate (newDonate){
        this.state.donates.push(newDonate)
        this.state.totalAmount = sumNumbers(this.state.donates.map((item)=>item.amount))
        this.#donateList.updateDonates(this.state.donates)
        this.#donateForm.updateTotalAmount(this.state.totalAmount)

    }
}