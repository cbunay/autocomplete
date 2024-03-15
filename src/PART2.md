1. **What is the difference between Component and PureComponent?**

when a Component updates is going re-render regardless of whether the component's props or state have actually changed
A PureComponent makes a shallow comparison of the component's current props and state with its next props and state. If the shallow comparison indicates that the props or state haven't changed, PureComponent prevents the component from re-rendering.

2. **Context + ShouldComponentUpdate might be dangerous. Why is that?**

3. **Describe 3 ways to pass information from a component to its PARENT.**

   - Callback functions: The parent passes a function to the child, and the child calls this function with the necessary data.
   - Using a state management library like Redux or the Context API.
   - Context Api: React's Context API allows you to pass data through the component tree without having to pass props down manually .

4. **Give 2 ways to prevent components from re-rendering.**

   - Using `useMemo` to memoize primitive values.
   - Using `useCallback` to memoize callback functions.

5. **What is a fragment and why do we need it?**

   - Is React component that allows grouping of children without adding extra nodes to the DOM.

6. **Give 3 examples of the HOC pattern.**

7. **What's the difference in handling exceptions in promises, callbacks and async…await?**

   - Callbacks: You handle errors in the callback function.
   - Promises: You handle errors in the catch block.
   - Async/await: You handle errors using try/catch blocks.

8. **How many arguments does setState take and why is it async.**

   - `setState` takes up to two arguments: the new state value (or a function to compute it) and a callback to execute after the state update is applied. It's asynchronous because React batches state updates for performance reasons.

9. **List the steps needed to migrate a Class to Function Component.**

10. **List a few ways styles can be used with components.**

    - Inline styles
    - CSS classes
    - CSS-in-JS

11. **How to render an HTML string coming from the server.**
