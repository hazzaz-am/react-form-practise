/* eslint-disable react/prop-types */

import { useInputData } from "../hooks/useInputData";

export default function ReuseableForm({ handlerFunction, title, btnTxt }) {
	const nameData = useInputData("");
	const emailData = useInputData("");
	const phoneData = useInputData("");

	const submitUserData = (e) => {
		e.preventDefault();
		let user = {
			name: nameData.value,
			email: emailData.value,
			phone: phoneData.value,
		};
		handlerFunction(user);
	};

	return (
		<>
			<h2>{title}</h2>
			<form onSubmit={submitUserData}>
				<input type="text" name="name" id="name" {...nameData} />
				<br />
				<input type="email" name="email" id="email" {...emailData} />
				<br />
				<input type="tel" name="phone" id="phone" {...phoneData} />
				<br />
				<input type="submit" value={btnTxt} />
			</form>
		</>
	);
}
