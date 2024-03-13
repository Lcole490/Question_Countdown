# Question_Countdown



## Objective

The goal of this app is to create a quiz that randomly delivers questions to a user from a question bank. The user is presented with a question and is given 4 Multiple Choice Answers to choose from. Like any other quiz, the person will be able to see their score at the end.


## Main Technologies Used

- HTML 
- CSS
- JavaScript
- React


### Personal Project Purpose

This project's purpose is primarily to practice building an app with React and serves as a way to review and incorporate key concepts in React.


### Current Features of the App

**Custom Question Bank**

Currently, the Questions that the quiz uses are housed in the questions.js file. They exist as an array of objects from which the app pulls from. The way the questions are set up in this file is key to how the overall app operates.


**Question Timer**

As the user starts the quiz, each question is timed. Currently, the timer is set for 5-10 seconds. In that time the user has to select one of the multiple choice options. If they fail to do so, a "skipped" designation will be received and the quiz will move on to the next question.


**Choice Selection Status**

When a user selects an answer from the multiple choice options, they will be able to receive an indication as to whether or not their selection was right or wrong. Each time a selection is made, the background will become "yellow" for a brief instant. 

If the selection is a correct one, the background will transition from "yellow" to "green". If the answer is incorrect, the background will transition from "yellow" to "red". All of this will occur for the user to see before the quiz moves on to the next question.


**Quiz Summary**

After all questions are presented to the user, the quiz will transition to a summary screen, where it will show the user that the quiz is complete. In addition to this message, the user will be given the percentages for the questions that were answered correctly, the questions that were answered incorrectly, and the questions that were skipped. 

Below these percentages, the user will be able to get a recap of the questions that they were asked, paired with the answer they chose. The answers will have a colored text depending on their status. So for correct answers, the text will be green. For incorrect answers, the text will be red. For questions that were skipped or did not receive an answer, a text of "Skipped" colored in white will be seen.