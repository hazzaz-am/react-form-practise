import { useState } from "react";

export default function StatefullForm() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const submitFormData = e => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
  }


  return (
		<form onSubmit={submitFormData}>
			<input
				type="text"
				name="name"
				id="name"
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<input
				type="phone"
				name="email"
				id="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<input
				type="tel"
				name="phone"
				id="phone"
				onChange={(e) => setPhone(e.target.value)}
			/>
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
}
