export default function CartList({ cart, removeProduct, emptyCart, Total }) {
    return (
      <div className="CartList-Card-Info">
        {cart.length == 0 ? (
          <p>Your Cart is Empty!</p>
        ) : (
          //Displaying cart items
          <div>
            <div><h3>Your Cart</h3></div>
            <p>No. of items: {cart.length}</p>
            {cart.map((i) => (
              <div key={i.id} className=".CartList-Container">
                <h2>{i.productName}</h2>
                <p><b>{i.price}</b></p>
                <button className=".Remove-Button" onClick={() => removeProduct(i.id)}>Remove</button>
              </div>
            ))}
            <div className="CartList-Buttons">
              <button onClick={emptyCart}>Empty Cart</button>
              <button className="#Buy-Button" onClick={Total}>Buy-Total: ${Total({ cart })}</button>
            </div>
          </div>
        )}
      </div>
      
    );
  }