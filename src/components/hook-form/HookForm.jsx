import { useInput } from "../hooks/useInput";
import { useInputData } from "../hooks/useInputData";

export default function HookForm() {
	const [name, nameSetter] = useInput("");
	const [phone, phoneSetter] = useInput("");
	const emailData = useInputData("");

	const submitFormData = (e) => {
		e.preventDefault();
		console.log(name);
		console.log(emailData.value);
		console.log(phone);
	};
	return (
		<form onSubmit={submitFormData}>
			<input
				type="text"
				name="name"
				id="name"
				value={name}
				onChange={nameSetter}
			/>
			<br />
			<input type="email" name="email" id="email" {...emailData} />
			<br />
			<input
				type="tel"
				name="phone"
				id="phone"
				value={phone}
				onChange={phoneSetter}
			/>
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
}
