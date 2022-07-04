import startBackground from '../svgFiles/startBackground';
import message from '../../assets/sounds/message.mp3';

const audio = new Audio(message);
function startPage() {
	$(document).ready(function () {
		$('#start_x5F_button_xA0_Image').on('click', function () {
			$('.start-page').css('display', 'none'); //close the start page 
			$('.machine-builder').css('display', 'flex'); //open the machine builder page
			audio.play();  //indicate that a message is shown
		});
	});

	return `
			<div class='start-page'>
			${startBackground()}
			</div>`;
}

export default startPage;
