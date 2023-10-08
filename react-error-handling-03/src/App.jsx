import { withErrorBoundary } from 'react-error-boundary'

function MyComponent() {
  // Your component logic
  test
  return (<h1>withErrorBoundary</h1>)
}
function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

const logErrorToService = ({...rest}) => {
  console.log(rest)
}
const MyComponentWithErrorBoundary = withErrorBoundary(MyComponent, {
  FallbackComponent: MyFallbackComponent,
  onError: logErrorToService,
  onReset: ()=>{},
  resetKeys: ['someKey']
});

export default function App() {
  const someKey = "test"
  return <MyComponentWithErrorBoundary someKey={someKey} />
}
