import { setting } from "../core/constans/setting"



export class DonateList {
    #donates
    #donatesContainer 
    constructor(donates){
        
        this.#donates = donates
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'
    }
    
    render(){
        
        const title = document.createElement('h2')
        title.className = 'donates-container__title'
        title.textContent = 'Список донатов'
        const donatesContainerDonates = document.createElement('div')
        donatesContainerDonates.className = 'donates-container__donates'
        
        

        this.#donates.forEach((item)=>{
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.textContent = item.date
            const amountClass = document.createElement('b')
            amountClass.textContent = `  ${item.amount} ${setting.currency}`
            donateItem.append(amountClass)
            donatesContainerDonates.append(donateItem)

        })
        
        this.#donatesContainer.append(title, donatesContainerDonates)
    //    donateItem.append(amountClass)
        
        return this.#donatesContainer

    }
    updateDonates(updatedDonates){
        const donatesContainerDonates = document.querySelector('.donates-container__donates')
        donatesContainerDonates.innerHTML = ''

        updatedDonates.forEach((item)=>{
        
            const donateItem = document.createElement('div')
            donateItem.className = 'donate-item'
            donateItem.textContent = item.date
            const amountClass = document.createElement('b')
            amountClass.textContent = `  ${item.amount} ${setting.currency}`
            donateItem.append(amountClass)
            donatesContainerDonates.append(donateItem)

        })
    }
}