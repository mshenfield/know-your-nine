# Design
This app will mostly center around scrolling through quiz cards.

## Components

### Introduction Page
We'll need a page to give instructions and trigger starting the quiz.

### Quiz Card
Each quiz card will be a stateful representation of the quote, with an option to select the answer 

#### Quote
A stylized quotation.

#### Answer Select
An answer select with the nine names listed.

#### Submit button
A button to commit to the answer. This should trigger

* Displaying the correct answer.
* Update your score.
* Display the image for the answer.

#### Answer
A display that shows the correct answer.

### Quiz Navigation
Click next if the current question is complete and loads the next question if it exists.

### Score
Potentially colored by percentage (0-33% red, 34-75% yellow, 76%-100% green).

### Ending Screen
Congratulations. Display EndingScore, and picture of orc.
