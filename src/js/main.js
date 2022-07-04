import startPage from './components/startPage';
import machineBuilder from'./components/machineBuilder';
document.querySelector('#app').innerHTML = 
//parent element to all components
`
  ${startPage()}
  ${machineBuilder()}
  <div class="ending">
     </div>
 `;
