# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Using react-error-boundar

### [blog.logrocket.com](https://blog.logrocket.com/react-error-handling-with-react-error-boundary/)
#
While class components and their lifecycle methods can help us implement error boundaries, react-error-boundary is a library that takes this functionality to the next level, making the process more straightforward and user-friendly. It’s a small library that provides a flexible way to handle JavaScript errors in React components.

React-error-boundary uses a more modern approach with React Hooks and functional components, which aligns better with the current trends in React development. It uses a simple component called ErrorBoundary that you can use to wrap around potentially error-prone code.

The ErrorBoundary component provided by this library has a prop called fallbackRender (or fallbackUI) that accepts a function or a React element to display when an error is caught. Furthermore, it provides a resetKeys prop that can be used to reset the state of your component when certain props change.

The beauty of react-error-boundary is that it eliminates the need to manually write class components and handle the state. It does all the heavy lifting behind the scenes, allowing developers to focus on building their applications. Let’s take a look at an example of how we might use react-error-boundary in a component:

#### `npm i react-error-boundary`