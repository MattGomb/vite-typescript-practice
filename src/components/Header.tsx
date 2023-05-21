import Nav from "./Nav"
import useCart from "../hooks/useCart"

type PropsType = {
  viewCart: boolean,
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>,
}

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart()

  const Content  = (
    <header className="header">
      <div className="header__title-bar">
        <h1>Acme co</h1>
        <div className="header__price-box">
          <p>Total items: {totalItems}</p>
          <p>Total price: {totalPrice}</p>
        </div>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  )
  return Content
}

export default Header