var centerRatio = 1.75** Number((1680)/(document.documentElement.clientWidth)); // ensure that draggin object follows cursor

import ending from './ending';
import drillNoise from '../../assets/sounds/drill-noise.mp3';


//audio file to show user that they have successfully connected the body part to the torso
const audio = new Audio(drillNoise);
audio.volume = 0.2;


//function to move selected body part. element = selected body part, x = x coordinate, y = y coordinate
function moveAt(x, y, element) {

	var xCoordinate = centerRatio*x + 'px';
	var yCoordinate = centerRatio*y + 'px';
	element.css('transform', `translate(${xCoordinate}, ${yCoordinate})`);
}

//function to check whether the body part is where it is supposed to be. x = x coordinate of the dragged body part, y = y coordinate, 
//correctX = correct x coordinate found in the object, correctY = correct y coordinate
function inRange(x, y, correctX, correctY) {
	console.log(x);
	console.log(correctX);
	let locationX = correctX - 5 < x && correctX + 5 > x;
	let locationY = correctY - 5 < y && correctY + 5 > y;
	return locationY && locationX;
}

//function to get current coordinate of body part so that user can drag and then leave body part and then come back to drag it aggain
function getCoordinates(element) {
	var transformMatrix =
		$(element).css('-webkit-transform') ||
		$(element).css('-moz-transform') ||
		$(element).css('-ms-transform') ||
		$(element).css('-o-transform') ||
		$(element).css('transform');
	var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
	var x = Number(matrix[12] || matrix[4]); //translate x
	var y = Number(matrix[13] || matrix[5]); // translate y 
	return { x, y };
}

function bodyParts() {
	//object that stores where the correct positions of each body part, and the total amount of correctly placed body parts
	console.log(screen.width);
	console.log(centerRatio);
	const correctCoordinates = {
		'#simplemech_xA0_leg1': {
			x: -455,
			y: 107,
			connected: false
		},
		'#simplemech_xA0_leg2': {
			x: -440,
			y: 105,
			connected: false
		},
		'#simplemech_xA0_chest': {
			x: -694,
			y: -90,
			connected: false
		},
		'#simplemech_xA0_head': {
			x: -671,
			y: -460,
			connected: false
		},
		'#simplemech_xA0_arm_1': {
			x: -1063,
			y: -66,
			connected: false
		},
		'#simplemech_xA0_arm_2': {
			x: -862,
			y: -66,
			connected: false
		},
		totalConnected: 0
	};
	$(document).ready(function () {
		var id;
		$('.body_part').on('pointerdown ', function (event) {
			id = '#' + $(this).attr('id');
			if (!correctCoordinates[id].connected) { //check if the body part is in the correct position only allow draggability if it is not.
				const startingX = event.pageX - getCoordinates(id).x; //get relative x and y coordinates based on the object location
				const startingY = event.pageY - getCoordinates(id).y;
				$(document).on('pointermove', function (event) {
					moveAt(event.pageX - startingX, event.pageY - startingY, $(id));
				});
				$(document).on('pointerup', function (event) {
					$(document).off(); //stop the following the cursor on mouse up
					var correctPosition = inRange(
						(event.pageX - startingX) * centerRatio,
						(event.pageY - startingY) * centerRatio,
						correctCoordinates[id].x,
						correctCoordinates[id].y
					);
					if (correctPosition) { // if the body is in the coorect position change its connect value to true. if all are connected call the ending function
						correctCoordinates[id].connected = true;
						correctCoordinates.totalConnected++;
						correctCoordinates.totalConnected === 6 ? ending() : audio.play();
					}
					else {
						console.log('hello');
						moveAt(0, 0, $(id)) //move body part back if incorrect
					}
				});
			}
		});
	});
}

export default bodyParts;
