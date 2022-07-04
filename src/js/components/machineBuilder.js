import bodyParts from './bodyParts';
import background from '../svgFiles/machineBackground';
function machineBuilder() {
        //show the machine builder background and call the body parts function
	return `<div class="machine-builder"> ${background()} ${bodyParts()}</div>
        `;
}
export default machineBuilder;
