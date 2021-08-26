import "./Input.css";
import "./TextPart.css";
import styled from "styled-components";

export default function Input(props) {
	const Div = styled.div`
		display: flex;
		flex-direction: column-reverse;
		position: relative;
	`;

	const HelperText = styled.p`
		margin-top: 4px;
		font-size: 10px;
		line-height: 14px;
		color: #828282;
		font-family: "Noto Sans JP", sans-serif;
	`;

	const HelperTextE = styled(HelperText)`
		color: #d32f2f;
	`;

	let Class = "",
		inPut;

	if (props.fullWidth && !props.multiline) {
		Class += " w-100";
		if (props.size === "sm") {
			Class += " size-sm";
		} else if (props.size === "lg" || props.size === undefined) {
			Class += " size-lg";
		}
	} else if (!props.multiline) {
		Class += " w-default";
		if (props.size === "sm") {
			Class += " size-sm";
		} else if (props.size === "lg" || props.size === undefined) {
			Class += " size-lg";
		}
	}

	if (props.fullWidth && props.multiline) {
		Class += " w-100";
	} else if (!props.fullWidth && props.multiline) {
		Class += " w-default";
	}

	let r;
	if (props.row !== undefined) {
		r = props.row;
	} else {
		r = "";
		if (props.size === "sm") {
			Class += " size-sm";
		} else if (props.size === "lg" || props.size === undefined) {
			Class += " size-lg";
		}
	}

	if (props.disabled) {
		Class += " disabled ";
		inPut = (
			<>
				<input
					placeholder="Placeholder"
					id={`${props.For}`}
					className={`${Class}`}
					disabled
					defaultValue={props.value}
				/>
				<label className="textcss" htmlFor={`${props.For}`}>
					Label
				</label>
			</>
		);
	} else if (props.error) {
		Class += " error ";
		inPut = (
			<>
				<HelperTextE>{props.helperText}</HelperTextE>
				<input
					placeholder="Placeholder"
					id={`${props.For}`}
					className={`${Class}`}
					defaultValue={props.value}
				/>
				<label className="error-label" htmlFor={`${props.For}`}>
					Label
				</label>
			</>
		);
	} else {
		Class += " primary ";
		if (props.startIcon) {
			inPut = (
				<>
					<HelperText>{props.helperText}</HelperText>
					<span class="material-icons call">call</span>
					<input
						placeholder="Placeholder"
						id={`${props.For}`}
						className={`${Class} text-indent`}
						defaultValue={props.value}
					/>
					<label className="textcss" htmlFor={`${props.For}`}>
						Label
					</label>
				</>
			);
		} else if (props.endIcon) {
			inPut = (
				<>
					<HelperText>{props.helperText}</HelperText>
					<span class="material-icons lock">lock</span>
					<input
						placeholder="Placeholder"
						id={`${props.For}`}
						className={`${Class} text-indent-r`}
						defaultValue={props.value}
					/>
					<label className="textcss" htmlFor={`${props.For}`}>
						Label
					</label>
				</>
			);
		} else {
			inPut = (
				<>
					<HelperText>{props.helperText}</HelperText>
					<input
						placeholder="Placeholder"
						id={`${props.For}`}
						className={`${Class}`}
						defaultValue={props.value}
					/>
					<label className="textcss" htmlFor={`${props.For}`}>
						Label
					</label>
				</>
			);
		}
	}

	if (props.multiline) {
		return (
			<Div>
				<textarea
					placeholder="Placeholder"
					id={`${props.For}`}
					rows={r}
					className={`${Class} textarea-css`}
				></textarea>
				<label className="textcss" htmlFor={`${props.For}`}>
					Label
				</label>
			</Div>
		);
	} else {
		return <Div>{inPut}</Div>;
	}
}
