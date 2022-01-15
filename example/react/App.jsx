import ComponentC from './test.zh-CN.md'
import ComponentA from './README.md'
import ComponentB from './matter.md'

function App() {
  return (
    <>
      <ComponentC />
      <ComponentA style={{ padding: '20px 40px' }} />
      <ComponentB style={{ padding: '20px 40px' }} />
    </>
  )
}

export default App
