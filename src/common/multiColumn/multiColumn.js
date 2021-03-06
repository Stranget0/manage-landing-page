export default function MultiColumn(props) {
	const style = {
		WebkitTransition: 'all',
		msTransition: 'all',
		columnCount: props.columns
	};
	return (
		<div className={`multi-columns ${props.columns}-columns`} style={style}>
			{props.children}
		</div>
	);
}
