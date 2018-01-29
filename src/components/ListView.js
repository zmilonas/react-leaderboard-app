import React, { Component } from 'react';
import RecordItems from './RecordItems'


class ListView extends Component {
	render() {
		return (
			<div>
			<ul className="list-group list-group-flush">
				<RecordItems />
			</ul>
			</div>
		)
	}
}
export default ListView;