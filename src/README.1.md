# Running the App

To run the app, follow these steps:

1. Install the necessary dependencies by running `npm install` in the root directory of the project.

2. Start the development server by running `npm start`. This will start the server and open the app in your default web browser.

# Using the Autocomplete Component

The Autocomplete component is a customizable, auto-complete text input for your React application.

## Props

- `options`: An array of strings representing the available options for autocomplete.
- `inputValue`: The current input value for the autocomplete.
- `loading`: A boolean indicating whether the autocomplete is in a loading state.
- `onInputChange`: A callback function triggered when the input value changes.

## Example

Here's an example of how to use the Autocomplete component:

```tsx
import Autocomplete from "./Autocomplete";

const options = ["apple", "banana", "cherry"];

function App() {
  return <Autocomplete options={options} />;
}
```
