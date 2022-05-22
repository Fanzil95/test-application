import { setting } from '../core/constans/setting'
import { getFormattedTime } from '../core/utils'

export class DonateForm {
    #donate_form
    constructor(totalAmount, createNewDonate){
        this.totalAmount = totalAmount
        this.#donate_form = document.createElement('form')
        this.#donate_form.className = 'donate-form'
        this.createNewDonate = createNewDonate
        this.#donate_form.addEventListener('submit',(event)=>{
            event.preventDefault()
            if(event.target){
                const itemOfInput = document.querySelector('.donate-form__donate-input')
                if (!itemOfInput.value || itemOfInput.value ==='0'){
                    alert('Ошибка: \n Поле не может быть пустым. \n Сумма должна быть больше нуля.')
                }else if(itemOfInput.value){
                    console.log('ok')
                

                const donates = {
                    date: getFormattedTime(new Date()),
                    amount: itemOfInput.value

                }
                this.createNewDonate(donates)
                itemOfInput.value = ''
            }
            
            } 
        })

    }
    
    render (){
        
        const totalAmount = document.createElement('h1')
        totalAmount.id = 'total-amount'
        totalAmount.textContent = `${this.totalAmount} ${setting.currency}`
        const donateFormLabel = document.createElement('label')
        donateFormLabel.className = 'donate-form__input-label'
        donateFormLabel.textContent = `Введите сумму в ${setting.currency}`
        const  donateFormInput = document.createElement('input')
        donateFormInput.className = 'donate-form__donate-input'
        donateFormInput.name = 'amount'
        donateFormInput.type = 'number'
        donateFormInput.max = '100'
        donateFormInput.min = '0'
        donateFormInput.required = ''
        const submitButton = document.createElement('button')
        submitButton.className = 'donate-form__submit-button'
        submitButton.type = 'submit'
        submitButton.textContent = 'Задонатить'

        this.#donate_form.append(totalAmount, donateFormLabel, submitButton)
        donateFormLabel.append(donateFormInput)

        return this.#donate_form

    }
    updateTotalAmount (newAmount){
        const elementTotalAmount = document.querySelector('#total-amount')
         elementTotalAmount.textContent = `${newAmount}$`

        return elementTotalAmount
    
    }

}