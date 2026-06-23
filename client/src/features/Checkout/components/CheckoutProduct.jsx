function CheckoutProduct({ product }) {
  return (
    <div className="flex gap-4">
      <div className="w-20 h-24 overflow-hidden bg-neutral-100 flex-shrink-0">
        <img
          src={product.productId?.media?.[0]?.url}
          alt={product.productId?.product_name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="text-sm uppercase font-medium">
            {product.productId?.product_name}
          </h4>

          <span className="text-sm font-medium">
            ₹{product.productId?.sale_price}
          </span>
        </div>

        <p className="text-sm text-black/50 mt-1">
          Size: {product.size}
        </p>

        <p className="text-sm text-black/50">
          Color: {product.color}
        </p>

        <p className="text-xs text-black/40 mt-2">
          Qty: {product.quantity}
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;