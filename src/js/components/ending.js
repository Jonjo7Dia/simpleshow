import countdown from '../../assets/sounds/countdown.mp3';
import feedback from '../../assets/images/feedback_overlay-box-large.svg';
import outro_image from '../../assets/images/outro_image.jpeg';
const audio = new Audio(countdown); //audio for launch
function ending(){
    //show the ending div;
    $('.ending').css('display', 'flex');
    audio.play();
    //show the feedback svg
    $('.ending').append(`
    <img src=${feedback} alt="" id="feedback"/>
    
    `)
    //show simpleshow logo
    setTimeout(()=>{
        $('.ending').css('background-color', 'white');
        $('#feedback').attr('src', outro_image);

    }, 11000);
}

export default ending;