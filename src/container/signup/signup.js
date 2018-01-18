import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './signup.css'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import AuthAction from "../../store/actions/authAction";
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const style = {
    margin: 10,
};

let mapStateToProps = (state) => {
    return {
        state: state

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        creataUser: (data) => { dispatch(AuthAction.createUser(data)) },
        cancel : ()=>{ dispatch(AuthAction.createUserSuccessfully())}
    }
}
class RegisterCard extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            phone: '',
            address: '',
            email: '',
            password: '',
            bloodGroup : ''
        }
    }
    render() {
        return (


            <Card style={{ border: '2px solid brown' }}>
                <br />
                <CardTitle title="Register Your Account" subtitle="SignUp Here !" />
                <br />
                <TextField
                    hintText="Full Name"
                    onChange={(e) => { this.setState({ name: e.target.value }) }}
                /><br />
                <TextField
                    hintText="Age"
                    onChange={(e) => { this.setState({ age: e.target.value }) }}
                /><br />
                <TextField
                    hintText="Phone#"
                    onChange={(e) => { this.setState({ phone: e.target.value }) }}
                /><br />
                <TextField
                    hintText="Address"
                    onChange={(e) => { this.setState({ address: e.target.value }) }}
                /><br />
                <TextField
                value={this.state.email}
                    type='email'
                    hintText="Email"
                    onChange={(e) => { this.setState({ email: e.target.value }) }}
                /><br />
                <TextField
                value={this.state.password}
                    type='password'
                    hintText="Password"
                    onChange={(e) => { this.setState({ password: e.target.value }) }}
                /><br />
                <SelectField
                            hintText="Select Blood Group"
                            value={this.state.bloodGroup}
                            onChange={(e, i, val) => { this.setState({ bloodGroup: val }) }}
                        >
                            {/* <MenuItem value='' primaryText="Blood Group" disabled /> */}
                            <MenuItem selected value='A+' primaryText="A+" />
                            <MenuItem value='B+' primaryText="B+" />
                            <MenuItem value='AB+' primaryText="AB+" />
                            <MenuItem value='O+' primaryText="O+" />
                            <MenuItem value='O-' primaryText="O-" />
                            <MenuItem value='AB-' primaryText="AB-" />
                            <MenuItem value='B-' primaryText="B-" />
                            <MenuItem value='A-' primaryText="A-" />
                        </SelectField><br />
                <CardActions>
                        <RaisedButton label="Cancel" style={style} 
                        onClick={this.props.cancel}
                        />
                    <RaisedButton label="Register"
                        onClick={() => {
                            let user = {
                                name: this.state.name,
                                age: this.state.age,
                                phone: this.state.phone,
                                address: this.state.address,
                                email: this.state.email,
                                password: this.state.password,
                                bloodGroup : this.state.bloodGroup,
                                photoURL : 'https://i.pinimg.com/originals/93/d3/e3/93d3e31639a4d07613de9dccdc8bd5e8.png'
                            }
                            this.props.creataUser(user)
                        }

                        }
                        secondary={true} style={style} />
                </CardActions>
            </Card>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCard);