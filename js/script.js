


//
const schedule = document.querySelector('.schedule-main');
const cardStaff = document.querySelectorAll('.card-staff');
const booking = document.querySelector('.booking-main');
console.log('dasd');
if(cardStaff, schedule){
    cardStaff.forEach(data => {
        var cardItem = data.querySelectorAll('.card-item a');
        cardItem.forEach(item => {
            item.addEventListener('click', function(event){
                event.preventDefault();
                booking.classList.add('unshow')
                schedule.classList.add('active')
            })
        })
    })
}
mobiscroll.datepicker('#myInput', {
    controls: ['calendar'],
    selectMultiple: false,
    dateFormat: 'DD/MM/YYYY',
    display: 'anchored',
    touchUi: true,
    themeVariant: 'light'
});