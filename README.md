# Progress Bar Demo

## I. Problem Statement
Front End Assignment - Progress Bars
Primary task: Using vanilla JavaScript or any JavaScript library of your choosing (no jQuery), implement the following (you can make it look however you like):

[Example here](http://static.optus.com.au/pei/progress-bars-demo.ogv)

[Endpoint here](http://pb-api.herokuapp.com/bars)


### Requirements
* Must read data from the endpoint
* Multiple bars
* One set of controls that can control each bar on the fly
* Can't go under 0
* Can go over limit (defined in API), but limit the bar itself and change its colour
* Display usage amount, centered
* Write tests for your code (hint: TDD strongly preferred)
* Implement a responsive solution: testing it on mobile, tablet, etc. Getting it working nicely.
* Animate the bar change, make sure it works well when you tap buttons quickly.
* Version control (git)
* Once complete publish your code to github, bitbucket or other git based source control.

Bonus points for implementing "production quality" code, using practices such as:

* Setting it up as a project
* Setting up some automated tools
* Linting, code quality, etc
* JavaScript/CSS minification, packaging, etc
* Using a CSS preprocessor like SASS/SCSS
* Styling it to a production quality level
* It's up to you to decide how far you want to go, time permitting.

Example structure from the endpoint:

```sh
{
    "buttons": [
        10,
        38,
        -13,
        -18
    ],
    "bars": [
        62,
        45,
        62
    ],
    "limit": 230
}
```


### Breakdown
| Key | Description |
| ------ | ------ |
| buttons |	The amount of buttons to display and what value they increment or decrement the selected bar. Randomly generates between 4 and 6 buttons. |
| bars | The number of progress bars to display and their default values. Randomly generates between 2 and 5 progress bars. |
| limit | The equivalent to 100% of each bar. For example, the bar should be 100% filled when the progress hits 230. |

## II. IN PROJECT

1. `index.html` - to display the Progress Bars and the buttons to demonstate the increment and decrement in the progress.
2. `progressBar.js` - vanilla javascript code to fetch the data from the endpoint to draw the progress bars, buttons and the dropdown list. Contains function to change the selected progress bar width as per the value in the button selected.
3. `progressBar.min.js` - minified version of progressDemo.js.
4. `style.scss` - sass file for the styles. Whenever thi sfile is updated, the `watch-css` script in package.json triggers the css build to get the modifications updated in associated style.css file.
5. `style.css` - css style to portray progess in each progress bars, display the buttons and the dropdown list. Uses flex box to display the Dropdown list and Buttons.
6. `style.min.css` - minified version of progressDemo.min.css.
7. `package.json` - hold the metadata and the dependencies of the project.
8. `.gitignore` - file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected.
9. `server.js` - local server setup

## III. HOW TO USE THE CODE

#### Clone this repo locally
1. Run npm install
2. Run npm start, the application starts listening to port 3000. If this port is already in use, you may update server.js file to listen to any other port number and run the command npm start again.
Now that we have started the server locally, our web application can be found at localhost:3000
3. Open the browser and navigate to [http://localhost:3000](http://localhost:3000)
4. To manually build the style.scss file changes to style.css file, you may run the command `npm run build-css`. Else `npm run watch-css` will automatically update the style.css file whenever style.scss is modified.