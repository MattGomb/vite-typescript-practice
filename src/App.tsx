import Heading from "./components/Heading"
import { Section } from "./components/Section"
import Counter from "./components/Counter"
import { useState } from "react";
import List from "./components/List";

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <Heading title="Hello, world!" />
      <Section title="Chordle my balls">This is my Section.</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={["alcohol", "bitches", "coding"]} render={(item: string) => <span className="bold gold">{item}</span>} />
    </>
  )
}

export default App
