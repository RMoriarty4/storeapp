/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// eslint-disable-next-line no-undef
exports.handler = async (event) => {
  let price;
  let age;
  if (event.arguments) {
    price = event.arguments.price;
    age = event.arguments.age;
  } else {
    price = event.price;
    age = event.age;
  }

  const discountAmount = price * (age / 100);
  const discountedPrice = price - discountAmount;

  const response = {
    discountAmount,
    discountedPrice,
  };
  return response;
};
