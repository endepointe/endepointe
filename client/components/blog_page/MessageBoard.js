import CreateReply from './CreateReply';
export default function MessageBoard(props) {
	console.log('mb props: ', props.id)
	return (
		<div>
			create the message board components here
			<CreateReply/>
		</div>
	);
}