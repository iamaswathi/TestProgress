/** 
 * Created on 14-Nov-2020
 * Author - Aswathi Prakash
 * 
*/

/**
 * drawBarsInDOM() - iterates through the data.bars array to 
 * draw the progress bar on the screen
 * @param {*} data 
 */
function drawBarsInDOM(data) {
  for (var i = 0; i < data.bars.length; i++) {
    var progress = document.createElement('div');
    var cont = document.getElementById('content');
    cont.appendChild(progress);
    progress.setAttribute('class', 'progressBarContainer');
    progress.setAttribute('id', 'progress' + i);

    var progressBar = document.createElement('div');
    progress.appendChild(progressBar);
    progressBar.setAttribute('class', 'progressBar');
    progressBar.setAttribute('id', 'ProgressBar' + i);
    progressBar.style.width = data.bars[i] + '%';


    var barLabel = document.createElement('label');
    progressBar.appendChild(barLabel);
    barLabel.setAttribute('class', 'progressBarLabel');
    barLabel.setAttribute('id', 'barLabel' + i);
    barLabel.innerHTML = data.bars[i] + '%';
  }
}

/**
 * drawDropDownInDOM() - iterates through data.bars array and append
 * the dropdown list with the bar names
 * @param {*} data 
 */
function drawDropDownInDOM (data) {
  var dropdown = document.createElement('select');                  
  var controlContainer = document.getElementById('controlContainer');
  controlContainer.appendChild(dropdown);
  dropdown.setAttribute('id', 'progressBarNames');

  for (var i = 0; i < data.bars.length; i++)
  {
    var dropdownItem = document.createElement('option');
    dropdown.appendChild(dropdownItem);
    dropdownItem.setAttribute('id', 'dataList' + i);
    dropdownItem.setAttribute('value', i);
    dropdownItem.innerHTML = '#ProgessBar ' + (1+i);
  }
}

/**
 * drawButtonsInDOM() - iterates through the data.buttons array to create buttons 
 * with respective values and the click event
 * @param {*} data 
 */
function drawButtonsInDOM(data) {
  var buttonArea = document.getElementById('controlContainer');
  for( var j = 0; j < data.buttons.length; j++) {
    var button = document.createElement('button');
    button.innerHTML = data.buttons[j];
    button.setAttribute('value', data.buttons[j]);
    button.addEventListener('click', function () {
        addwidth(this.value);
    });
    buttonArea.appendChild(button);
  }
}

/**
 * loadProgressBars()- Fetch the data from the file to 
 * create progress bars and buttons as per the response
 */
function loadProgressBars() {
  fetch('http://pb-api.herokuapp.com/bars')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.error('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      } else {
        response.json().then(function(thedata) {
          let responseData = JSON.parse(JSON.stringify(thedata));
          if(responseData) {
            drawBarsInDOM(responseData);
            drawDropDownInDOM(responseData);
            drawButtonsInDOM(responseData);
          }
        });
      }
    }
  )
  .catch(function(err) {
    console.warn('Fetch Error :-S', err);
  });
}

/**
 * addwidth() show the progress in the selected bar as per the button clicked,
 * appends the button value to the existing bar value
 * @param {*} value - the value of the button clicked
 */
function addwidth(value)
{
    var v = parseInt(document.getElementById('progressBarNames').value);
    var a = document.getElementById('barLabel'+v).innerHTML;
                    
   // add the selected button value to the value of the selected Bar
    value = parseInt(value) + parseInt(a);

   // if value is greater than or equals 100, display the bar in red color         
    if (value >= 100)
    {
        document.getElementById('ProgressBar'+v).style.backgroundColor = 'red';
        document.getElementById('ProgressBar'+v).style.width = '100%';
        document.getElementById('barLabel'+v).innerHTML = value + '%';                   
    } 
    //if value is less than 100 and greater than 0, display the bar in default green color
     else if (value <= 100 && value > 0)
    {
        document.getElementById('ProgressBar'+v).style.backgroundColor = '#4CAF50';
        document.getElementById('ProgressBar'+v).style.width = value + '%';
        document.getElementById('barLabel'+v).innerHTML = value + '%';
    } 
    // if value is less than or equal to 0, display the bar with no color
      else if (value <= 0)
    {
        document.getElementById('ProgressBar'+v).style.width = '0%';
        document.getElementById('barLabel'+v).innerHTML = '0%';

    } 
}

loadProgressBars();

export default loadProgressBars ;
