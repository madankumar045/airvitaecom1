"use server"

// Server action to get Razorpay configuration
export async function getRazorpayConfig() {
  return {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_demo_key",
    currency: "INR",
  }
}

export async function createRazorpayOrder(amount: number) {
  try {
    // For demo purposes, return a mock order
    return {
      id: "order_demo_" + Date.now(),
      amount: amount * 100, // Convert to paise
      currency: "INR",
      status: "created",
    }
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    throw new Error("Failed to create order")
  }
}

export async function verifyPayment(paymentData: {
  razorpay_order_id: string
  razorpay_payment_id: string
  razorpay_signature: string
}) {
  try {
    // For demo purposes, always return success
    return { success: true, message: "Payment verified successfully" }
  } catch (error) {
    console.error("Error verifying payment:", error)
    return { success: false, message: "Payment verification failed" }
  }
}
