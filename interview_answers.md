# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional class?

A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server, and componentWillUpdate(nextProps, nextState) This method is invoked right before rendering.


3. Define stateful logic.

Stateful logic is any code that uses state, but in the case of hooks I would define it as a behaviour created with the use of one or more hooks.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange
The render method renders a React element into a virtual DOM. Recalling our definition of "arrange", this is basically the part where we set ourselves up for success.

Act
The screen.getByText() method can be used to "query" the DOM for a specific node by its text that we expect to see in the browser.

Assert
verify the result.