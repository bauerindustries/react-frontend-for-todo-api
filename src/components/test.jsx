function Test() {
  const mongoDB = process.env.MONGODB_URL;

  return <p>TEST{mongoDB}</p>;
}

export default Test;
