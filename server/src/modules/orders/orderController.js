import Order from "./orderModel.js";
import Cart from "../cart/cartModel.js";

export const createOrder = async (req, res) => {
  try {
    const {
      userId,
      shippingAddress,
      paymentMethod,
    } = req.body;

    const cart = await Cart.findOne({
      userId,
    }).populate("items.productId");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    const items = cart.items.map((item) => ({
      productId: item.productId._id,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
      price: item.productId.sale_price,
    }));

    const totalAmount = items.reduce(
      (sum, item) =>
        sum + item.quantity * item.price,
      0
    );

    const order = await Order.create({
      userId,
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
      paymentStatus:
        paymentMethod === "COD"
          ? "Pending"
          : "Pending",
    });

    // Clear cart after successful order
    cart.items = [];
    await cart.save();

    res.status(201).json({
      success: true,
      message: "Order placed successfully",
      order,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email")
      .populate("items.productId")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserOrders = async (
  req,
  res
) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({
      userId,
    })
      .populate("items.productId")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateOrderStatus = async (
  req,
  res
) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order =
      await Order.findByIdAndUpdate(
        orderId,
        { status },
        { new: true }
      );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    res.json({
      success: true,
      message:
        "Order status updated successfully",
      order,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};