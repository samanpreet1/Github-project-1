export default function InventoryCard({ products, addProduct }) {
    return (
      // displaying list of products with name, brand, quantity and price
      <div> <h1> Groceries App</h1>
      <div className="Inventory-Container">
        {products.map((p) => (
          <div className="Inventory-Card" key={p.id}>
            <img className="img"src={p.image} alt={p.productName} />
            <h2>{p.productName}</h2>
            <h3>{p.brand}</h3>
            <p>{p.quantity}</p>
            <p><b>{p.price}</b></p>
            <button onClick={() => addProduct(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
    );
  }