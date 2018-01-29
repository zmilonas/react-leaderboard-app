import React, { Component } from 'react'; 
import store, { addRecord } from '../redux';
import FormElement from './FormElement';
import { push } from 'react-router-redux'

export class NewRecord extends Component {
	constructor(props) {
		super();
		this.state = {
			fields: {
				firstName: "",
				lastName: "",
				points: "",
				date: ""
			},
			btnState: false
		}
		this.onSubmit = (e) => {
			store.dispatch(addRecord(this.state.fields.firstName, this.state.fields.lastName, this.state.fields.points, this.state.fields.date));
			store.dispatch(push('/'))
		} 
		this.onChange = (id, field, val) => {
			this.state.fields[field] = val;
			this.state.btnState = (this.state.fields.firstName && this.state.fields.lastName && this.state.fields.points && this.state.fields.date)
		}
	}
	render() {
		return (
		<div className="card-body">
			<FormElement name="firstName" inputType="text" fullName="First Name" action={this.onChange} />
			<FormElement name="lastName" inputType="text" fullName="Last Name" action={this.onChange} />
			<FormElement name="points" inputType="number" fullName="Points" action={this.onChange} />
			<FormElement name="date" inputType="date" fullName="Date" action={this.onChange} />
			<button className="btn btn-outline-success" onClick={this.onSubmit}>Add Record</button>
		</div>
		)
	}
}
