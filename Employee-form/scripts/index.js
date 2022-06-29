// Validation for phone and Whatsapp numbers

const form = document.getElementById("form")
form.addEventListener('submit', (e)=>{
    const phno = document.getElementById('emp-phno')
    const whno = document.getElementById('emp-whatsapp-no')
    const regex = new RegExp('^[0-9]{10}$')
    let phone_number = phno.value
    let whatsapp_number = whno.value
    if(!regex.test(phone_number) || !regex.test(whatsapp_number)){
        e.preventDefault()
        alert("Enter a valid 10-digit phone/whatsapp number")
    }
    
})

// Setting min and max dates for dob (assuming 60 years as max and 14 year as min)

let today = new Date()
let day = today.getDate()
let month = today.getMonth() + 1
const min_year = (today.getFullYear() - 60)
const max_year = (today.getFullYear() - 14)

if(day<10){
    day = '0'+day
}
if(month<10){
    month = '0'+month
}
const min_date = min_year+'-'+month+'-'+day
const max_date = max_year+'-'+month+'-'+day
let dob = document.getElementById('emp-dob')
dob.setAttribute('min', min_date)
dob.setAttribute('max', max_date)


// Enabling and disabling textbox if other education is selected 
$('input[name="edu"]').on('change', function(){
    if(this.value=='other'){
        $('textarea').attr('disabled', false).focus()
    }
    else{
        $('textarea').attr('disabled', true)
    }
    
})
