import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux'
import BBEpic from "../../store/epic/BBEpic";
import BBAction from '../../store/actions/BBAction';
import * as firebase from 'firebase'

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
const styles = {
    customWidth: {
        width: 150,
    },
};
class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            bloodGroup: 'Select Blood Group ',
            noOfUnitRequird: 1,
            urgency: '7 days',
            country: 'Pakistan',
            city: '',
            hospital: '',
            relation: '',
            contactNo: '',
            information: '',
            date : {}
        };
    }


    componentWillReceiveProps(props) {
        // console.log(props.isOpen)
        if (props.isOpen === true) {
            this.handleOpen();
            this.props.closeModal();
        }
        // this.setState({ open: !this.state.open })
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        console.log('handleClose')
        // let post = {
        //     bloodGroup: this.state.bloodGroup,
        //     noOfUnitRequird:  this.state.noOfUnitRequird,
        //     urgency:  this.state.urgency,
        //     country:  this.state.country,
        //     city:  this.state.city,
        //     hospital:  this.state.hospital,
        //     relation:  this.state.relation,
        //     contactNo:  this.state.contactNo,
        //     information: this.state.information,
        //     userName : firebase.auth().currentUser.displayName,
        //     uid: firebase.auth().currentUser.uid,
        //     datee : new Date(this.state.date)
        // }
        // this.props.addPost(post);
        // // console.log('handleClose')
        // this.setState({ open: false });

    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={false}
                onClick={() => { this.setState({ open: false }) }}
            />, <FlatButton
                label="Create Post"
                primary={true}
                // keyboardFocused={true}
                onClick={()=>{
                    let post = {
                        bloodGroup: this.state.bloodGroup,
                        noOfUnitRequird:  this.state.noOfUnitRequird,
                        urgency:  this.state.urgency,
                        country:  this.state.country,
                        city:  this.state.city,
                        hospital:  this.state.hospital,
                        relation:  this.state.relation,
                        contactNo:  this.state.contactNo,
                        information: this.state.information,
                        userName : this.props.profileData.name , 
                        userPhotoURL :this.props.profileData.photoURL,
                        uid: firebase.auth().currentUser.uid,

                        // datee : new Date(this.state.date)
                    }
                    this.props.addPost(post);
                    // console.log('In Button')
                    this.setState({ open: false,
                        bloodGroup: 'Select Blood Group ',
                        noOfUnitRequird: 1,
                        urgency: '7 days',
                        country: 'Pakistan',
                        city: '',
                        hospital: '',
                        relation: '',
                        contactNo: '',
                        information: '',
                    
                    });
                }}
            />
        ];

        return (
            <div>
                <Dialog
                    title="Creat Post"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={() => {console.log('onRequestClose'); this.setState({ open: false }) }}
                    autoScrollBodyContent={true}

                ><br/>
                    Create Post

          <Card style={{ border: '1px solid lightgray', margin: 10 }}>
                        <br />
                        <SelectField
                            floatingLabelText="Select Blood Group"
                            value={this.state.bloodGroup}
                            onChange={(e, i, val) => { this.setState({ bloodGroup: val }) }}
                        >
                            <MenuItem value='SELECT BLOOD GROUP' selected primaryText="Blood Group" disabled />
                            <MenuItem selected value='A+' primaryText="A+" />
                            <MenuItem value='B+' primaryText="B+" />
                            <MenuItem value='AB+' primaryText="AB+" />
                            <MenuItem value='O+' primaryText="O+" />
                            <MenuItem value='O-' primaryText="O-" />
                            <MenuItem value='AB-' primaryText="AB-" />
                            <MenuItem value='B-' primaryText="B-" />
                            <MenuItem value='A-' primaryText="A-" />
                        </SelectField><br />
                        <SelectField
                            floatingLabelText="Number of Unit Required"
                            value={this.state.noOfUnitRequird}
                            onChange={(e, i, val) => { console.log(val); this.setState({ noOfUnitRequird: val }) }}

                        >
                            <MenuItem value='1' primaryText="1" />
                            <MenuItem value='2' primaryText="2" />
                            <MenuItem value='3' primaryText="3" />
                            <MenuItem value='4' primaryText="4" />
                            <MenuItem value='5' primaryText="5" />
                        </SelectField><br />

                        <SelectField
                            floatingLabelText="Urgency"
                            value={this.state.urgency}
                            onChange={(e, i, val) => { this.setState({ urgency: val }) }}
                        >
                            <MenuItem value='1' primaryText="1 day" />
                            <MenuItem value='2' primaryText="2 day" />
                            <MenuItem value='3' primaryText="3 day" />
                            <MenuItem value='4' primaryText="4 day" />
                            <MenuItem value='5' primaryText="5 day" />
                        </SelectField><br />
                        <SelectField
                            floatingLabelText="Country"
                            value={this.state.country}
                            onChange={(e, i, val) => { this.setState({ country: val }) }}
                        >
                            <MenuItem value='Pakistan' primaryText="Pakistan" />
                            <MenuItem value='Iran' primaryText="Iran" />
                            <MenuItem value='Iraq' primaryText="Iraq" />
                            <MenuItem value='Bangladesh' primaryText="Bangladesh" />
                            <MenuItem value='UAE' primaryText="UAE" />
                        </SelectField><br />
                        <TextField
                            floatingLabelText="City"
                            hintText="Karachi"
                            onChange={(e) => { this.setState({ city: e.target.value }) }}
                            value={this.state.city}
                        /><br />
                        <br />

                        <TextField
                            floatingLabelText="Hospital"
                            hintText="Saylani Hospital"
                            value={this.state.hospital}
                            onChange={(e) => { this.setState({ hospital: e.target.value }) }}

                        /><br />
                        <TextField
                            floatingLabelText="Relation With Pateint"
                            value={this.state.relation}
                            onChange={(e) => { this.setState({ relation: e.target.value }) }}
                            hintText="Friend"
                        /><br />
                        <TextField
                            floatingLabelText="Contact No "
                            value={this.state.contactNo}
                            hintText="03082409229"
                            onChange={(e) => { this.setState({ contactNo: e.target.value }) }}
                        /><br />
                        <DatePicker hintText="Portrait Dialog" 
                        value = {this.state.date}
                        onChange={(e,val)=>{ this.setState({ date : val})}}
                         /><br/>
                        <TextField
                            floatingLabelText="Additional Information "
                            value={this.state.information}
                            hintText="information"
                            onChange={(e) => { this.setState({ information: e.target.value }) }}
                        /><br />
                    </Card>
                </Dialog>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (data) => { dispatch(BBAction.addPost(data)) }
    }
}
let mapStateToProps = (state) => {
    return {
        profileData: state.BBReducer.profileData,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)