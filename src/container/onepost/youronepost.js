import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import BBAction from '../../store/actions/BBAction';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';
import * as firebase from 'firebase'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

const style = {
    color: 'red',
    fontWeight: 'bold'
}
const cardStyle = {
    margin: 25,
    padding: 0,
    border: '2px solid brown',
    fontSize : 16,
    fontWeight : 'normal'
}
class YourOnePost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit : false,
            bloodGroup: '',
            noOfUnitRequird:'' ,
            urgency: '',
            country: '',
            city: '',
            hospital: '',
            relation: '',
            contactNo: '',
            information: '',
             name: ''
        }
        console.log(this.props.post)
    }

    componentWillReceiveProps(nextProps){
        // console.log(nextP.post)
        // if(this.props.post !== nextP.post){

        //     this.setState({ name : 'Nasir'})
        // }
        if(nextProps.post !== null){
            // this.setState({    
            //     bloodGroup: this.props.post.bloodGroup,
            //     noOfUnitRequird: this.props.post.noOfUnitRequird,
            //     urgency: this.props.post.urgency,
            //     country: this.props.post.country,
            //     city: this.props.post.city,
            //     hospital: this.props.post.hospital,
            //     relation: this.props.post.relation,
            //     contactNo: this.props.post.contactNo,
            //     information: this.props.post.information,
            // })
        }
    }
    render() {
        let post = this.props.post;
        // console.log(post)
        // console.log(this.state)
        return (
                this.state.isEdit ?
            <div>
                <Card style={cardStyle}>
                <h3>Edit  Post</h3>
                <hr/>
                  {/* <h3>Blood Group <span style={style}>{post.bloodGroup}</span></h3>
                  <h2>{post.noOfUnitRequird} unit Required In {post.hospital} <span>{`${post.city} , ${post.country}`}</span> </h2>
                  <p><i>{post.information}</i></p>
                  <p>Contact No : <span>{post.contactNo}</span></p>
                  <p>Urgency : <span>{post.urgency}</span></p>
                  <p>Relation with Patient : <span>{post.relation}</span></p> */}
                    {/* <DropDownMenu 
                                    // floatingLabelText="Select Blood Group"                    
                                    value={'post.bloodGroup'}
                                    onChange={this.handleChange}
                                    onChange={(e, i, val) => { this.setState({ bloodGroup: val }) }}
                                    >
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </DropDownMenu> */}
                     <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={<Avatar src={post.userPhotoURL} />}>
                                <p style={{ fontSize : 25  , marginBottom : -15 , marginTop : -5}}>{this.props.profileData.name}</p>
                         </ListItem>
                        </List>
                        <hr/>
                         <br/>
                           <SelectField
                            floatingLabelText="Select Blood Group"
                            value={this.state.bloodGroup}
                            onChange={(event, index, value) => {this.setState({bloodGroup : value}); }}
                        >
                            {/* <MenuItem value='SELECT BLOOD GROUP' selected primaryText="Blood Group" disabled /> */}
                            <MenuItem value='A+' primaryText="A+" />
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
                                    onChange={(e, i, val) => {  this.setState({ noOfUnitRequird: val }) }}

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
                                {/* <DatePicker hintText="Portrait Dialog" 
                                value = {post.date}
                                onChange={(e,val)=>{ this.setState({ date : val})}}
                                /><br/> */}
                                <TextField
                                    floatingLabelText="Additional Information "
                                    defaultValue={post.information}
                                    hintText="information"
                                    onChange={(e) => { this.setState({ information: e.target.value }) }}
                                /><br />
                            





                    {/* <h3>Blood Group <span style={style}>{post.bloodGroup}</span></h3>
                    <h2>{post.noOfUnitRequird} unit Required In {post.hospital} <span>{`${post.city} , ${post.country}`}</span> </h2>
                    <p><i>{post.information}</i></p>
                    <p>Contact No : <span>{post.contactNo}</span></p>
                    <p>Urgency : <span>{post.urgency}</span></p>
                    <p>Relation with Patient : <span>{post.relation}</span></p>
 */}



                    <RaisedButton secondary={true} label="Cancel" style={{ margin: 10}} 
                    onClick={()=>{
                        // console.log(this.props.postKey)
                        this.setState({ isEdit : !this.state.isEdit})

                    }}
                    />
                    <RaisedButton secondary={true} label={'Save Changes'} style={{ margin: 10}} 
                        onClick={()=>{
                            let post = {
                                bloodGroup: this.state.bloodGroup,
                                noOfUnitRequird: this.state.noOfUnitRequird,
                                urgency: this.state.urgency,
                                country: this.state.country,
                                city: this.state.city,
                                hospital: this.state.hospital,
                                relation: this.state.relation,
                                contactNo: this.state.contactNo,
                                information: this.state.information,
                                uid : firebase.auth().currentUser.uid,
                                userName : firebase.auth().currentUser.displayName,
                                 userPhotoURL :this.props.profileData.photoURL
                            }
                            // console.log(this.props.postKey , post)
                            this.props.updatePost({key : this.props.postKey , postData  : post});
                            this.setState({ isEdit : !this.state.isEdit})
                        }}
                    />
                   
              </Card>
            </div> 
            : 
            <Card style={cardStyle}>
                          <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={<Avatar src={post.userPhotoURL} />}>
                                <p style={{ fontSize : 25 , marginBottom : -15 , marginTop : -5}}>{this.props.profileData.name}</p>
                         </ListItem>
                        </List>
                        <hr/>
                <h3>Blood Group <span style={style}>{post.bloodGroup}</span></h3>
                <h2>{post.noOfUnitRequird} unit Required In {post.hospital} <span>{`${post.city} , ${post.country}`}</span> </h2>
                <p><i>{post.information}</i></p>
                <p>Contact No : <span>{post.contactNo}</span></p>
                <p>Urgency : <span>{post.urgency} Days</span></p>
                <p>Relation with Patient : <span>{post.relation}</span></p>
                <RaisedButton secondary={true} label="DELETE" style={{ margin: 10}} 
                onClick={()=>{
                    // console.log(this.props.postKey)
                    this.props.deletePost(this.props.postKey)
                }}
                />
                <RaisedButton secondary={true} label="Edit" style={{ margin: 10}} 
                    onClick={()=>{
                        this.setState({    
                            bloodGroup: this.props.post.bloodGroup,
                            noOfUnitRequird: this.props.post.noOfUnitRequird,
                            urgency: this.props.post.urgency,
                            country: this.props.post.country,
                            city: this.props.post.city,
                            hospital: this.props.post.hospital,
                            relation: this.props.post.relation,
                            contactNo: this.props.post.contactNo,
                            information: this.props.post.information,
                        })

                        this.setState({ isEdit : !this.state.isEdit})
                    }}
                />
                <p>Date : <span>12-2-2019</span></p>
            </Card>
        );
    }
}
let mapStateToProps = (state)=>{
    return {
        
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        deletePost : (data)=>{ dispatch(BBAction.deletePost(data))},
        updatePost : (data)=>{ dispatch(BBAction.updatePost(data))}
    }
}

// export default YourOnePost;
export default connect(mapStateToProps, mapDispatchToProps)(YourOnePost)



//------------------------------------------------------------------------------------------------------------------
