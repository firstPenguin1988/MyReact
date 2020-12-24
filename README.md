# swapi-app

## App.js

We first started of by building main component App. We used the basic default component and gave it a state of an empty array. So we starts off empty and then after a request is made to get us back information from the SWAPI api . We use that to change the state and populate the people property with whatever came back. 

Then what we passed that data to a component called list through a prop called people. This people prop took the people that this.state people and passed it to the list component.

## List.js

we took this  props people and just called it people again and we're mapping over everything in this array people is an array so we mapped over and for each item we are returning the name of the character which was a property inside of that object let's go and there's a name property so as you can see the name is Luke on the first and so on. we passed that item to character info so that we could use each individual object as its own little you know as its own independent piece and basically take information from each one of them .

## CharInfo.js

We created this character info component and we used whatever was passed down which was passed down as charinfo and we here right here we took charinfo from props and saved it as a variable called info and all we did was just display it so we just displayed basically properties inside of that of that information that was passed down and what we did to to basically create this little open and close box

