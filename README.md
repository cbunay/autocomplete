# Autocomplete component

1. Performance matters as we are expecting a production ready
   component.

2. You cannot use any 3rd party libraries - only pure React and internal DOM functions.

3. You should use TypeScript and write proper interfaces and types.

4. The function to filter the data should be asynchronous. You can use mock data (such as a JSON array), but the function which uses it should be asynchronous (similar to a real REST call).

5. It should have basic working CSS. No need for anything fancy (such as drop shadows etc).

6. You need to handle all non-standard/edge use-cases - it should have a perfect user-experience.

7. Highlight the matching part of the text, in addition to showing it.

8. No external state management libraries (refer to #1 as well), only native React method.

9. Use only functional components with hooks.

10. Shortcuts and hacks are ok - but you have to add comments on what you are doing and why.

11. Add a README.md file explaining how to run the project.

12. Bonus Point: Load data using a real API call to some resource.
