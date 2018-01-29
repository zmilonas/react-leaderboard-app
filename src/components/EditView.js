import React from 'react';
import { connect } from 'react-redux';
import FormElement from './FormElement';
import 'date-input-polyfill';
import store, { editRecord, removeRecord } from "../redux";
import { push } from "react-router-redux"

class SingleRecord extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: this.props.record,
		}
		this.onAction = (id,field,val) => store.dispatch(editRecord(id, field, val));
		this.onDelete = (id) => { store.dispatch(removeRecord(id)); store.dispatch(push("/")) };
	}
	 render() {

		return (
		<div className="card-body">
		<div className="text-right"><button className="btn btn-outline-danger" onClick={() => this.onDelete(this.state.data.id)}>Delete</button></div>
		<FormElement id={this.state.data.id} name="firstName" inputType="text" fullName="First Name" value={this.state.data.firstName} action={this.onAction} />
		<FormElement id={this.state.data.id} name="lastName" inputType="text" fullName="Last Name" value={this.state.data.lastName} action={this.onAction} />
		<FormElement id={this.state.data.id} name="points" inputType="number" fullName="Points" value={this.state.data.points} action={this.onAction} />
		<FormElement id={this.state.data.id} name="date" inputType="date" fullName="Date" value={this.state.data.date} action={this.onAction} />
		<button className="btn btn-outline-primary" onClick={() => store.dispatch(push("/"))}>Save & Close</button>
		</div>
		)
	}
}

const editItem = ({records, match}) => {
	let i = records.findIndex((el) => {
		return el.id === match.params.id;
	});
  	if(i > -1) {
	  return (
	     <SingleRecord record={records[i]} />
	  )
	} else {
	  return (
	  	 <div className="alert alert-danger">
	  	 	Record with this id not found
	  	 </div>
	  )
	}
}
const mapStateToProps = (store) => {
  return {
    records: store[0].records
  }
}

export default connect(mapStateToProps)(editItem)