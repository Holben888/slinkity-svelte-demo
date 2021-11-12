import React from 'react'

const What = () => {
  const [count, setCount] = React.useState(0)
  return (
    <>
    <button onClick={() => setCount(count + 1)}>It's React!</button>
    <p>Reactified count: {count}</p>
    </>
  )
}
export default What