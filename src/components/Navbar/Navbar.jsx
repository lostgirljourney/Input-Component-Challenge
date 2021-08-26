import "./Navbar.css";

export default function Navbar() {
	return (
		<div className="nav-section">
			<a href="https://devchallenges.io/" target="blank">
				<h1 className="web">
					<span className="dev">Dev</span>challenges.io
				</h1>
			</a>

			<ul>
				<li>Colors</li>
				<li>Typography</li>
				<li>Spaces</li>
				<li>Buttons</li>
				<li>
					<span className="active">Inputs</span>
				</li>
				<li>Grid</li>
			</ul>
		</div>
	);
}
