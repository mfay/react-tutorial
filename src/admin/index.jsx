import Board from '../shared/board.jsx';

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<Board
					name="bobby"
					onClick={() => this.handleClick('')}
				/>
			</div>
		);
	}

	handleClick(i) {
		console.log('Click received by game object', i);
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
