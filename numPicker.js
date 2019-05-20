// function getMood() {
// 	const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
// 	return moods[Math.floor(Math.random() * moods.length)];
// }


// class JSXDemo extends React.Component {
// 	render(){
// 		return(
// 			<div>
// 				<h1>My Current Mood is: {getMood()}</h1>
// 			</div>
// 		);
// 	}
// }


function getNum(){
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render () {
		const num = getNum();
		let msg;
		if (num === 7){
			msg = 
			<div>
				<h2>Winner!</h2>
				<img src="https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1570&q=80"/> 
			</div>
		} else {
			msg = <p>Loser</p>
		}
		return (
		<div>
			<h1>Your number is {num}</h1>
			{msg}
			{/* <p>{num === 7 ? 'Congrats!' : 'Unlucky'}</p> */}
			{/* {
				num === 7 ? 
				<img src="https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1570&q=80"/> 
				: null
			} */}
			{/* {
				num === 7 && <img src="https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1570&q=80"/>
			} */}
		</div>
		)
	};
}



// ReactDOM.render(<NumPicker/>, document.getElementById('root'));
// ReactDOM.render(<JSXDemo/>, document.getElementById('root'));
