import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

class ListRecord extends React.Component {
	 render() {
		return (
			<span className="leaderboard-list-record">
				<Row>
				<Col>
				<strong>{this.props.record.lastName}</strong>&nbsp;
				{this.props.record.firstName}
				</Col>
				<Col className="text-right">
					{this.props.record.points}&nbsp;
					<Link to={"/edit/"+this.props.record.id}>Edit <i className="fa fa-pencil" /></Link>
				</Col>
				</Row>
			</span>
		)
	}
}

const recordItems = ({records}) => {
	records.sort((a,b) => {
		let x = a.points, 
			y = b.points;
		return ((x > y) ? -1 : ((x < y) ? 1 : 0));
	});
  return (
    <div>
      {records.map((record, key) => {
      	return (<li key={key} className="list-group-item"><ListRecord record={record} /></li>)
      })}
    </div>
  )
}
const mapStateToProps = (store) => {
  return {
    records: store[0].records
  }
}

export default connect(mapStateToProps)(recordItems)