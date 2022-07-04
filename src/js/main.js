import startPage from './components/startPage';
import machineBuilder from './components/machineBuilder';
import endingFeedback from './svgFiles/endingFeedback';

document.querySelector('#app').innerHTML =
	//parent element to all components
	`
  ${startPage()}
  ${machineBuilder()}
  <div class="ending">
  ${endingFeedback()}
     </div>
 `;
