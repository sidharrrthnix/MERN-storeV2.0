const ShowPyamentInfo = ({ order, showStatus = true }) => {
  <div>
    <p>
      <span>OrderId: {order.paymentIntent.id}</span>
      <span>
        Amount :{" "}
        {(order.paymentIntent.amount / 100).toLocaleString("es-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <span>Currency :{order.paymentIntent.payment_method_types[0]}</span>
      <span>Pyament:{order.paymentIntent.status.toUpperCase()}</span>
      <span>
        orderedon :{" "}
        {new Date(order.paymentIntent.created * 1000).toLocaleString()}
      </span>
      <span className="badge bg-primary text-white">
        Status :{order.orderStatus}
      </span>
    </p>
  </div>;
};
