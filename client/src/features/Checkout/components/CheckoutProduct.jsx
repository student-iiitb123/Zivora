function CheckoutProduct({ product }) {
  return (
    <div className="flex gap-4">
      <div className="w-20 h-24 overflow-hidden bg-neutral-100 flex-shrink-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="text-sm uppercase font-medium">
            {product.name}
          </h4>

          <span className="text-sm font-medium">
            {product.price}
          </span>
        </div>

        <p className="text-sm text-black/50 mt-1">
          {product.color}
        </p>

        <p className="text-xs text-black/40 mt-2">
          Qty: {product.quantity}
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;