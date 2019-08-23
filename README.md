# Corporate Event Planner

### Style

- 2 spaces for indentation for JS and CSS (Prettier extension)
- Components should be written in PascalCase.
- Functional components will be written by default. If state is required, we will be using React hooks instead of writing class components.
- Because the app is not complex, state to be managed without the use of Redux or useReducer. Props will either be passed down from parent to child as normally or with the help of the Context API.
- Functional components will be declared with variable names and exported as follows:
  ```
  const ComponentName = props => {
      return (//JSX)
  }
  export default ComponentName
  ```
- Generally, attempt to destructure props as follows:

  ```
  <ComponentName {...props} />
  ```

  ```
  const Component = props => {
      const {varOne, varTwo, varThree} = props

      return (
          <h1>varOne</h1>
          <p>`${varTwo} and ${varThree}`</p>
      )
  }
  ```
