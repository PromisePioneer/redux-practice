import { useSelector } from "react-redux";

function Customer() {
  //read data from redux store
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
