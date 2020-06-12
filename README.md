# Mr Roboger's Neighborhood

#### Looping and Branching Exercise, 6.12.2020

#### By Jeff Kim

## Description

This program accepts user input in the form of numbers and returns the input to the user, with the following exceptions:

* All returned numbers that contain a 1 are replaced (all digits) with "Beep!"
* All returned numbers that contain a 2 are replaced (all digits) with "Boop!"
* All returned numbers that contain a 3 are replaced (all digits) with "Won't you be my neighbor?"
* These exceptions are recognized in order of importance from least to most (3, 2, 1) and only the most important exception should be returned

## Specs

1. Code should recognize user input numbers and return a sequence of numbers from 0 to the user's number
Example Input: "4"
Example Output: "0 1 2 3 4"

2. Code should reject non-numeral input
Example Input: "C1"
Example Output: "Please input a number"

3. Code should replace all returned numbers that contain a 1 with the string "Beep!"
Example Input: "5"
Example Output: "0 Beep! 2 3 4 5"

4. Code should replace all returned numbers that contain a 2 with the string "Boop!"
Example Input: "6"
Example Output: "0 Beep! Boop! 3 4 5 6"

5. Code should replace all returned numbers that contain a 3 with the string "Won't you be my neighbor?"
Example Input: "7"
Example Output: "0 Beep! Boop! Won't you be my neighbor? 4 5 6 7"

6. Code should replace all returned numbers containing 2 or more exceptions as the appropriate string in descending order of importance
Example Input: "13"
Example Output: "1 ... 9 Beep! Beep! Boop! Won't you be my neighbor?"

7. Code should clear previous output when user submits a new number
Example Input: "1" -> "2"
Example Output: "Boop!"

## Setup/Installation Requirements

To use this site:

1. Open your preferred browser.
2. Navigate to https://jkbutserious.github.io/mr-robogers-neighborhood.
3. In the text field, enter a number. Note: Non-numerical characters will not be accepted by the input field.
4. Click Submit.

You will receive output in the form of a range of numbers and strings.

To contribute to this project:

1. Open your preferred browser.
2. Navigate to https://github.com/jkbutserious/mr-robogers-neighborhood.
3. Log into or sign up for your GitHub account.
4. Click the **Fork** button to copy the repository and all source code.
5. From your forked repository, you can download or clone the repository, by clicking the **Clone or download** button.
  * To clone the repository in GitHub Desktop, click the **Open in Desktop** option
  * To download the repository, click the **Download ZIP** option, save the archive to your computer, and extract it to the folder of your choice
6. Use your preferred code editor to edit index.html, styles.css, and/or scripts.js. **Note**: the following files are inclusions from popular code libraries and should not be edited:
  * bootstrap.css
  * bootstrap.css.map
  * jquery-3.5.1.js
7. Save any changes you make in your code editor and use your preferred git solution to commit your changes.
8. Push your changes to your forked repository.

## Known Bugs

**Initial Release**
* No known bugs

## Support and contact details

To report any issues with this page or to contribute to this project, contact Jeff Kim at kim2jy@hotmail.com.

## Technologies Used

This page was created using the following technologies:

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery

### License

Copyright © 2020 Jeffrey Kim

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.