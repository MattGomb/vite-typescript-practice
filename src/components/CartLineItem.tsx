import { ChangeEvent, ReactElement, memo } from "react"
import { CartItemType } from "../context/CartProvider"
import { ReducerAction } from "../context/CartProvider"
import { ReducerActionType } from "../context/CartProvider"

type PropsType = {
  item: CartItemType,
  dispatch: React.Dispatch<ReducerAction>,
  REDUCER_ACTIONS: ReducerActionType, 
}

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS}: PropsType) => {

  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href

  const lineTotal: number = (item.price * item.quantity)

  const highestQuantity: number = 20 > item.quantity ? 20 : item.quantity

  const optionValues: number[] = [...Array(highestQuantity).keys()].map(i => i + 1)

  const options: ReactElement[] = optionValues.map(value => {
    return <option key={`opt${value}`} value={value}>{value}</option>
  })

  const onChangeQuantity = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, quantity: Number(e.target.value) }  
    })
  }

  const onRemoveFromCart = () => dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: item })

  const content = (
    <li className="cart__item">
      <img src={img} alt={item.name} className="cart__img" />
      <div aria-label="item name">{item.name}</div>
      <div aria-label="price per item">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(item.price)}</div>
      <label htmlFor="itemQuantity" className="offscreen">Item Quantity</label>
      <select name="itemQuantity" id="itemQuantity" className="cart__select" value={item.quantity} aria-label="item quantity" onChange={onChangeQuantity}>{options}</select>
      <div className="cart__item-subtotal" aria-label="Line item subtotal">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(lineTotal)}</div>
      <button className="cart__button" aria-label="remove item from cart" title="remove item from cart" onClick={onRemoveFromCart}>X</button>
    </li>
  )

  return content
}

function areItemsEqual({ item: prevItem }: PropsType, { item: nextItem }: PropsType) {
  return Object.keys(prevItem).every(key => {
    return prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType]
  })
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual)
export default MemoizedCartLineItem