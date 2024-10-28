
export default function SimpleForm() {
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  }
  return (
    <form onSubmit={submitFormData}>
      <input type="text" name="name" id="name" />
      <br />
      <input type="email" name="email" id="email" />
      <br />
      <input type="tel" name="phone" id="phone" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}
