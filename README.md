# Quiz Board
This program allows high school students in an after school computer club to take a test after completing lessons in JavaScript. The students take the test via the website. The test is multiple choice, and students can see their score on the site, after submitting results. Each question has a specific number of points, and based on the score, the students are able to get a simple analysis of their performance, as either "excellent", "fair" or "poor". If poor, they are requested to retake the test.

#### 22nd February 2019
#### By Agnes Mwaniki (agnesndutamwaniki@gmail.com)

## Description
This program allows high school students in an after school computer club to take a test after completing lessons in JavaScript. The students take the test via the website. The test is multiple choice, and students can see their score on the site, after submitting results. Each question has a specific number of points, and based on the score, the students are able to get a simple analysis of their performance, as either "excellent", "fair" or "poor". If poor, they are requested to retake the test.

## Setup/Installation Requirements
* Linux OS

## Built With
HTML, CSS, Bootstrap and jquery

## Contribution - BDD
If you would like to contribute to this project, the following BDD specs should help you:smile:

Behavior                                                                                       |  Input Example                                                                                                        | Output Example
-----------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|----------
Show multiple choice questions that can be answered on the site                                | 1. Where do we put the JavaScript element on HTML? [checkbox:unchecked] <script> [checkbox:unchecked]<js>             | 1. Where do we put the JavaScript element on HTML? [checkbox:checked] <script> [checkbox:unchecked]<js>
Show the points assigned to each question                                                      | 1. Where do we put the JavaScript element on HTML? [checkbox:unchecked] <script> [checkbox:unchecked]<js> (3 points)  | 1. Where do we put the JavaScript element on HTML? [checkbox:checked] <script> [3 points] [checkbox:unchecked]<js>
Allow the user to select the correct answer on the web page                                    | 1. Where do we put the JavaScript element on HTML? [checkbox:unchecked] <script> [checkbox:unchecked]<js> (3 points)  | 1. Where do we put the JavaScript element on HTML? [checkbox:checked] <script> [checkbox:unchecked]<js>
Allow the user to submit the correct answers on the web page after they are done with the quiz | submit button: [>> SUBMIT <<]                                                                                         | submit button: [>> SUBMIT <<]       
Add up the user score and convert it to a percentage                                           | 3 correct answers checked via radio buttons (4*4)= 16 points                                                          | 80%
Show the user their score after they are done submitting the quiz answers                      | submit button: [>> SUBMIT<<]                                                                                          | "Your score is "80%"
Show the user performance status after they are done submitting the quiz answers               | submit button: [>> SUBMIT<<]                                                                                          | "excellent"




## License
Detailed license information can be found here: (https://github.com/AgnesNM/quiz-board/blob/master/LICENSE.md/) [Licensing Information] Copyright (c) 2019 ** Agnes Mwaniki **
