import { useRef, useEffect } from "react";

export default function RefForm() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const submitFormData = e => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
  }

  // focus name field after render
  useEffect(() => {
    nameRef.current.focus()
  })

	return (
		<form onSubmit={submitFormData}>
			<input ref={nameRef} type="text" name="name" id="name" />
			<br />
			<input ref={emailRef} type="phone" name="email" id="email" />
			<br />
			<input ref={phoneRef} type="tel" name="phone" id="phone" />
			<br />
			<input type="submit" value="Submit" />
		</form>
	);
}
