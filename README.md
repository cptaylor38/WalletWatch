# [Penny](http://penny-checkbook.herokuapp.com/)

A MERN stack expense tracker using Material Ui and Passport for authentication.

Features and site overview:

1. Add your salary as a flat input or enter your average weekly hours and hourly wage to submit your calculated annual income.

2. Add an expense with an associated category to help organize and track your spending - summaries calculated and represented as pie charts on the home screen. Slightly different layout on most mobile screen sizes with text summaries instead of pie charts due to scaling.

3. Select a category to navigate to its respective tab and associated expenses. They are currently separated by recurring and non-recurring database boolean values.

This was meant to be a small MERN exercise with practice using Material Ui and Passport auth that I hadn't used before.

It's still a bit of a work in progress with a few bugs:

Design notes:

\*The pages, as they are, could use a bit more content and the categories currently do not filter out expenses from other months. The pie chart and mobile version of the overview do.

\*Data population and state transitions could be handled better.

Attached images - and deployed [site:](http://penny-checkbook.herokuapp.com/)

![Landing page](./ReadMeImgs/pennyHome.png 'Landing page')

![Home overview](./ReadMeImgs/pennyOverview.png 'Home overview')

![Category tab](./ReadMeImgs/pennyCategory.png 'Category tab')

4/9/2021
Currently working on remodeling the database, expanding features, and completely redesigning this app.
