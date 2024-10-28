import "./App.css";
import ReuseableForm from "./components/reuseable-form/ReuseableForm";
// import HookForm from "./components/hook-form/HookForm";
// import RefForm from './components/ref-form/RefForm'
// import SimpleForm from './components/simple-form/SimpleForm'
// import StatefullForm from './components/StatefulForm/StatefullForm'

function App() {
	const createUserProfile = (data) => {
		console.log("User Created", data);
	};

	const updateUserProfile = (data) => {
		console.log("User Ready To Update", data);
	};
	return (
		<>
			<h1>React Form</h1>
			{/* <SimpleForm/> */}
			{/* <StatefullForm/> */}
			{/* <RefForm/> */}
			{/* <HookForm /> */}
			<ReuseableForm
				title="Create Profile"
				handlerFunction={createUserProfile}
				btnTxt="Submit"
			/>
			<ReuseableForm
				title="Update Profile"
				handlerFunction={updateUserProfile}
				btnTxt="Update"
			/>
		</>
	);
}

export default App;
