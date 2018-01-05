import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import BBAction from '../../store/actions/BBAction';
import  { connect } from 'react-redux'
import * as firebase from 'firebase'
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
 class ProfileModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isEdit : true,
      name: '',
      age: '',
      phone: '',
      address: '',
      email: '',
      bloodGroup :'' 
    };
    console.log(this.props.profileData)
  }
  componentDidUpdate(){
    // console.log(this.props.profileData)
    
    
  }

  
  componentWillReceiveProps(props) {
    // console.log(props.isOpen)
    if(props.isOpen === true){
      this.handleOpen();
      this.props.closeModal();
    }
    if(props.profileData !== null){
      this.setState({
        name: this.props.profileData.name,
        age: this.props.profileData.age,
        phone: this.props.profileData.phone,
        address: this.props.profileData.address,
        email: this.props.profileData.email,
        bloodGroup :this.props.profileData.bloodGroup 
      })
    }
    // this.setState({ open: !this.state.open })
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    
    this.setState({ open: false });
    
  };
  
  render() {
    const actions = [
      <FlatButton
      label="Ok"
      primary={true}
      keyboardFocused={true}
      onClick={this.handleClose}
      />, <RaisedButton label={this.state.isEdit  ? 'Edit' : 'Update Profile'} onClick={()=>{
        let profileData = {
          name: this.state.name,
          age: this.state.age,
          phone: this.state.phone,
          address: this.state.address,
          email: this.state.email,
          bloodGroup :this.state.bloodGroup? this.state.bloodGroup : 'Not Define In Facebook',
          photoURL  : this.props.profileData.photoURL
        }
        // this.state.isEdit ? '' : ()=>{this.props.updateProfile(profileData) ; console.log('DOne')};
        if(!this.state.isEdit){
          this.props.updateProfile(profileData) ;
          this.handleClose();
          //  console.log('DOne')
        }
        this.setState({isEdit : !this.state.isEdit})
        
        
        
        }} style={{ margin : 12}} />
    ];

    // console.log(firebase.auth().currentUser.uid )

    return (
      <div>
        <Dialog
          title="Profile"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          // autoScrollBodyContent={true}

        >
        View and Edit Your Profile

          <Card style={{ border: '1px solid lightgray' , margin : 10 }}>
                
                <TextField
                    hintText="Full Name"
                    disabled = {this.state.isEdit}
                    name = 'pname'
                    // defaultValue= {this.props.profileData.name}
                    value={this.state.name}
                    onChange = {(e)=>{ this.setState({ name : e.target.value})}}
                /><br />
                <TextField
                    hintText="Age" 
                    disabled = {this.state.isEdit}    
                    name = 'age'
                    value={this.state.age}
                    onChange = {(e)=>{ this.setState({ age : e.target.value})}}
                                    
                /><br />
                <TextField
                    hintText="Phone#"
                    disabled = {this.state.isEdit} 
                    name = 'ph'
                    value={this.state.phone}
                    onChange = {(e)=>{ this.setState({ phone : e.target.value})}}
                                       
                /><br />
                <TextField
                    hintText="Address"
                    name = 'address'
                    disabled = {this.state.isEdit}          
                    value={this.state.address}
                    onChange = {(e)=>{ this.setState({ address : e.target.value})}}          
                /><br />
                <TextField
                    disabled = {true}                    
                    type='email'
                    hintText="Email"
                    name = 'email'
                    value={this.state.email}
                    onChange = {(e)=>{ this.setState({ email : e.target.value})}}
                    
                /><br />
                {/* <TextField
                    disabled = {true}                    
                    name = 'bbgroupA'
                    value={this.state.bloodGroup}
                    
                /><br /> */}
                <SelectField
                            disabled = {this.state.isEdit}                          
                            hintText="Select Blood Group"
                            value={this.state.bloodGroup}
                            onChange={(e, i, val) => { this.setState({ bloodGroup: val }) }}
                        >
                            <MenuItem value='SELECT BLOOD GROUP' primaryText="Blood Group" disabled />
                            <MenuItem selected value='A+' primaryText="A+" />
                            <MenuItem value='B+' primaryText="B+" />
                            <MenuItem value='AB+' primaryText="AB+" />
                            <MenuItem value='O+' primaryText="O+" />
                            <MenuItem value='O-' primaryText="O-" />
                            <MenuItem value='AB-' primaryText="AB-" />
                            <MenuItem value='B-' primaryText="B-" />
                            <MenuItem value='A-' primaryText="A-" />
                        </SelectField>
             
               
                
            </Card>



          {/* <DatePicker hintText="Date Picker" /> */}
        </Dialog>
      </div>
    );
  }
}
let mapStateToProps = (state)=>{
  return {
    photoURL : state.BBReducer.profileData.photoURL
  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
      updateProfile : (data)=>{ dispatch(BBAction.updateProfile(data))}
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileModal)