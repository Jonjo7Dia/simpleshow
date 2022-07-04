import countdown from '../../assets/sounds/countdown.mp3';
import bodyParts from './bodyParts';
const audio = new Audio(countdown); //audio for launch
function ending(){
    //show the ending div;
    $('.ending').css('display', 'flex');
    audio.play();
    //show the feedback svg
   
    $('#restart-button').click(function(){
        $('.ending').css('display', 'none');
        $('.body_part').css('transform', 'translate(0px, 0px)');
        audio.pause();
        audio.currentTime = 0;
        bodyParts();
    })
    
}

export default ending;