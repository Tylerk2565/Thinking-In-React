In this project state is being used to store our data like our search input and checkbox selection.
Props are being used to pass down data from our parent components to our child components, the states are then passed as props.
Whenever the user types in the search bar or clicks on the checkbox, our searchbar component will call a function from props which will then update the state
When our state updates, our product table will be re-rendered to show the filtered products

The best example of state and props is to think of it as a waterfall. The state is at the top, props send that state down to child components and those components trigger changes that updates the state. 
