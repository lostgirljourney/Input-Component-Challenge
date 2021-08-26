import React from "react";
import TextPartMain from "./Input/TextPartMain";
import "./App.css";
import Input from "./Input/Input";

export default function App() {
	return (
		<div className="button-body">
			<h1 className="topic">Inputs</h1>
			<div className="style">
				<TextPartMain text="<Input />" />
				<Input For="primary" />
			</div>
			<div className="style">
				<TextPartMain text="<Input error />" />
				<Input For="error" error />
			</div>
			<div className="style">
				<TextPartMain text="<Input disabled />" />
				<Input For="disabled" disabled />
			</div>
			<div className="row">
				<div className="style">
					<TextPartMain text="<Input helperText = &ldquo;Some interesting text&rdquo; />" />
					<Input
						helperText="Some interesting text"
						For="helperText"
					/>
				</div>
				<div className="style">
					<TextPartMain text="<Input helperText = &ldquo;Some interesting text&rdquo; error />" />
					<Input
						helperText="Some interesting text"
						For="helperTextE"
						error
					/>
				</div>
			</div>
			<div className="row">
				<div className="style">
					<TextPartMain text="<Input startIcon />" />
					<Input For="startIcon" startIcon />
				</div>
				<div className="style">
					<TextPartMain text="<Input endIcon  />" />
					<Input For="endIcon" endIcon />
				</div>
			</div>
			<div className="style">
				<TextPartMain text="<Input value = &ldquo;text&rdquo; />" />
				<Input For="value" value="Text" />
			</div>
			<div className="row">
				<div className="style">
					<TextPartMain text="<Input size = &ldquo;sm&rdquo; />" />
					<Input For="size-sm" size="sm" />
				</div>
				<div className="style">
					<TextPartMain text="<Input size = &ldquo;lg&rdquo; />" />
					<Input For="size-lg" size="lg" />
				</div>
			</div>
			<div className="style">
				<TextPartMain text="<Input fullWidth />" />
				<Input fullWidth For="fullWidth" value="Text" />
			</div>
			<div className="style">
				<TextPartMain text="<Input multiline row= &ldquo;4&rdquo; />" />
				<Input For="multiline" multiline row="4" />
			</div>
		</div>
	);
}
