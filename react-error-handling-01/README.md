# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Error boundaries in React
### [blog.logrocket.com](https://blog.logrocket.com/react-error-handling-with-react-error-boundary/)
#

In terms of where to place these error boundaries, they can be set up around the entire app or individual components for more granular control. It’s important to note that error boundaries catch errors during rendering, in lifecycle methods, and constructors of the whole tree below them. However, error boundaries do not catch errors for:

Event handlers (for that, you need to use regular try/catch)
Asynchronous code (e.g., setTimeout or requestAnimationFrame callbacks)
Server-side rendering
Errors thrown in the error boundary itself (rather than its children)
Error boundaries were introduced in React v16, and to use them, you need to define a class component with either or both of the following lifecycle methods: getDerivedStateFromError() or componentDidCatch().

