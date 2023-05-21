import useCart from "../hooks/useCart"

type PropsType = {
  viewCart: boolean,
}

const Footer = ({viewCart}: PropsType) => {
  const {totalItems, totalPrice} = useCart()

  const year: number = new Date().getFullYear()

  const pageContent = viewCart ? <p>Shopping Cart &copy; {year}</p> : (<><p>Total items: {totalItems}</p><p>Total price: {totalPrice}</p><p>Shopping Cart &copy; {year}</p></>)
  
  return (
    <footer className="footer">{pageContent}</footer>
  )
}

export default Footer