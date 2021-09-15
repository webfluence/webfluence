<!-- ##Problem Statement

When looking at campaign finance information, the convoluted nature of transaction records is generally difficult for people to interpret. With millions of records per election cycle and complicated layers of organizational data, voters cannot reasonably draw conclusions on their own.

We make it easy by summarizing information about every current member of congress.
Someone: Take Sam. Sam is a voter in Texas who has to make a decision about which representative to vote for in the upcoming federal election cycle. Sam would like to learn about the incumbent candidate in her district and wants to see a historical record of donors to her representative. Sam can use her state and district or the representative’s name directly to find and display an informative summary about donations to the representative. Sam knows that she lives in district 26 but doesn’t know who her representative is, she searches for TX and district 26 and finds that her representative is Michael Burgess.

##Application

When Sam selects the representative, she will see basic information about the representative, an interactive and branchable network graph, and a table summary of the top 10 donor organizations to the senator in their last election cycle.

Sam can explore candidate - organization connections further by using the branch tool. When she clicks on an organization’s node, the top 10 legislators that the selected organization donated to over the past 10 years will populate and grow the network. She can continue to explore these relationships deeper by clicking on another legislator and seeing their top 10 donor organizations and so on.

Sam can also explore information about the originally selected legislator in the organizational data table at the bottom of the page. Sam can see general total donation amounts for the top 10 donors to the initially selected politician. She can see summaries about each organization and their donation habits and totals. If she doesn’t know what a column’s data means, she can click on any of the column heads to view more information.

Now that Sam has explored her representative’s previous campaign finance record, she now feels more equipt to make an assessment about her rep’s values and supporters. Sam can now make a more informed decision when she votes!

##Technologies Used:

Our webapp was built using React, Redux, Node.js, Express, and Material.UI
To render the network graph, we used Vis.js and Vis-React
For our data, we used our own multi-million row PostgreSQL database in combination with API calls to OpenSecrets.org -->


# Webfluence

## _An Interactive Network Graph to Explore Political Donor Connections_

<a href="https://webfluence.herokuapp.com" target="_blank">Visit Webfluence</a>
<a href="https://drive.google.com/file/d/1FXTZNYUlonZUYC0ZRj6Uil8v8gCOTZYn/view?usp=sharing
" target="_blank">Watch the Demo Video</a>

<!-- <img src="public/popin-banner.jpg" width="850"> -->

<br/>

---

## About Webfluence

Webfluence is an app where you can see the connections between federal legislators and their largest donors. Drawing connections between many politicians and their donors is generally difficult for the average person, unless you're an investigative journalist — and even then it takes hours of pouring over public records! We make it easy by drawing the connections for you using the most recent election cycle data!

- Select a politican from the selection box
- Select the branch tool from the network graph tool set
- Click on any exterior node to branch the graph further

> ### _Who are the major donors tied to your lawmakers?_

<br/>

<img src="public/video_preview.gif" width="600">

Explore information about the selected candidates top 10 donors in the summaries table beneath the network graph.

<img src="public/video_preview_2.gif" width="600">


---

## Tech Stack

- ![React](https://img.shields.io/badge/-React-05122A?style=plastic&color=1ea9f5&logo=react)
- ![Redux](https://img.shields.io/badge/-Redux-05122A?style=plastic&color=a084f7&logo=redux&logoColor=6131AE)
- ![Node.js](https://img.shields.io/badge/-Node.js-05122A?style=plastic&color=093103&logo=node.js)
- ![Express.js](https://img.shields.io/badge/-Express-05122A?style=plastic&color=252c2f&logo=express)
- ![Postgres](https://img.shields.io/badge/-Postgres-05122A?style=plastic&color=032147&logo=postgresQL)
- ![Sequelize](https://img.shields.io/badge/-Sequelize-05122A?style=plastic&color=0f5182&logo=sequelize)
- ![Material UI](https://img.shields.io/badge/-MaterialUI-05122A?style=plastic&color=01335f&logo=materialui)
- ![Vis.js](https://img.shields.io/badge/-Vis.js-05122A?style=plastic&color=01335f&logo=data:image/png;base64,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)


Built with <a href="https://github.com/FullstackAcademy/boilermaker" target="_blank" >Fullstack Academy Boilermaker</a>

<br/>

---

## The Engineers

Webfluence was created by Sakib Hossain, Doug Henderson, Kyle Combs, and Jonathan Blanco as part of their senior capstone for Fullstack Academy, completed in just 2 weeks!

- <a href="https://github.com/Sakib1211" target="_blank"><p>Sakib Hossain</p>
- <a href="https://github.com/dhend595" target="_blank"><p>Doug Henderson</p>
- <a href="https://github.com/kylecombs" target="_blank"><p>Kyle Combs</p>
- <a href="https://github.com/jonblanco-gif" target="_blank"><p>Jonathan Blanco</p>
