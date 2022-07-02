import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";

const Signup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
		control,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		console.log(watch());
	};

	console.log("errors", errors);

	const selectOptionGender = [
		{
			value: 1,
			label: "Femal",
		},
		{
			value: 2,
			label: "Male",
		},
	];

	const selectOptionHoppy = [
		{
			value: 1,
			label: "Reading",
		},
		{
			value: 2,
			label: "Sing",
		},
		{
			value: 3,
			label: "Sport",
		},
		{
			value: 4,
			label: "Swimming",
		},
	];
	return (
		<div className=" w-50 mt-5  m-auto d-flex justify-content-center align-items-center flex-column    border ">
			<h3 className=" my-3">Create new Account</h3>
			<form   onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-3 ">

					<label className="form-label">Email address</label>
					<input
						placeholder="Email"
						type="text"
						className="form-control px-5 py-2"
						{...register("email", {
							required: true,
							pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
						})}
					/>
					{errors.email && errors.email.type === "required" && (
						<p className="text-danger">Email is required</p>
					)}

					{errors.email && errors.email.type === "pattern" && (
						<p className="text-danger">pattern is required</p>
					)}
				</div>

				<div className="mb-3  ">
					<label className="form-label">phone</label>
					<input
						placeholder="phone"
						type="text"
						className="form-control px-5 py-2"
						{...register("phone", { required: true, maxLength: " 11" })}
					/>
					{errors.phone && errors.phone.type === "required" && (
						<p className=" text-danger">Phone is required</p>
					)}
					{errors.phone && errors.phone.type === "maxLength" && (
						<p className=" text-danger">Max Length is 11</p>
					)}
				</div>

				<div className="mb-3 ">
					<Controller
						name="SelectGender"
						control={control}
						render={({ field }) => (
							<ReactSelect
								isSearchable
								placeholder="Select Gender"
								{...field}
								options={selectOptionGender}
							/>
						)}
					/>
				</div>

				<div className="mb-3  ">
					<Controller
						name="SelectHoppies"
						control={control}
						render={({ field }) => (
							<ReactSelect
								isSearchable
								isMulti
								placeholder="Select Hoppies"
								{...field}
								options={selectOptionHoppy}
							/>
						)}
					/>
				</div>

				<div className="mb-3  ">
					<label className="form-label">Password</label>
					<input
						type="password"
						className="form-control px-5 py-2"
						{...register("password", { required: true })}
					/>
					{errors.password && errors.password.type === "required" && (
						<p className="text-danger">password is required</p>
					)}
				</div>

				<div className="mb-3 ">
					<label className="form-label">Password</label>
					<input
						type="password"
						className="form-control px-5 py-2"
						{...register("confirmedPassword", {
							required: true,
							validate: (value) => {
								if (watch("password") != value) {
									return "Your passwords do no match";
								}
							},
						})}
					/>

					{errors.password && errors.password.type === "required" && (
						<p className="text-danger">confirmed is required</p>
					)}
					{errors.confirmedPassword && errors.confirmedPassword.type === "validate" && (
						<p className="text-danger">Your passwords do no match</p>
					)}
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Signup;
