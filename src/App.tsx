import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"
import { useState } from "react"

function App() {
  const [viewCart, setViewCart] = useState(false)

  const pageContent = viewCart ? <Cart /> : <ProductList />

  const Content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {pageContent}
      <Footer viewCart={viewCart} />
    </>
  )

  return Content
}

export default App