$(document).ready(function () {
    
//     let div = $('.div')
//     let count = 0
//     div.click(function () {
//         if( $(this).attr('style')){

//         }else{

//             count++
//             if(count % 2 == 0){
//                 $(this).css({
//                     "background-size": "cover",
//                     "background-image": "url('../assets/x.png')"
//                 })
//             }else{
    
//                 $(this).css({
//                     "background-size": "cover",
//                     "background-image": "url('../assets/o.png')"
//                 })
//             }
//         }

       

//     })

$('.fa-search').click(function(){
    
    $('.container-2').css('background-color','rgba(173, 216, 230, 0.747)')
    let data =  $(this).closest('tr').find('td').toArray()

    for (let i = 0; i < data.length; i++) {
        const element = $(data[i]).text();
        $('.modal').append(element, '<br>')
        ;
    }


    $('.container-2').css('display','block');

})

$('.container-2').click(function(){
    $('.container-2').css('display','none');
})






})