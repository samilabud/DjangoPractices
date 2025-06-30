import Form from "../components/Form";
function login() {
  return (
    <div>
      <Form route="/token/" method="login" />
    </div>
  );
}
export default login;
