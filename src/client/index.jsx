import Square from '../shared/square.jsx';

class Larry extends React.Component {
	render() {
		return (
			<div className="game">
				<Square name="larry" onClick={() => this.handleClick()}
				/>
			</div>
		);
	}

	handleClick() {
		console.log('Client clicky');
	}
}

ReactDOM.render(
	<Larry />,
	document.getElementById('root')
);
