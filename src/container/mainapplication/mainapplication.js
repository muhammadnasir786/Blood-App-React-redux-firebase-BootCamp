import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link, NavLink
} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ProfileModal from '../profile/profile'
import DonateForm from "../donarform/donarform";
import CreatePost from "../createpost/createpost";
import OnePost from "../onepost/onepost";
import AllPost from "../allpost/allpost";
import DonarList from "../donarlist/donarlist";
import * as firebase from "firebase";
import { connect } from 'react-redux';
import BBAction from "../../store/actions/BBAction";
import YourPost from "../yourpost/yourpost";
const style = {
    margin: 12,
};
class MainApplication extends Component {
    constructor(){
        super();
        this.state = {
            isProfileModal : false,
            isDonarFromModal : false,
            isCreatePostModal : false
        }
        console.log(firebase.auth().currentUser)
    }
    
    componentDidMount(){
        // console.log('getProfileData')
        // console.log(this.props.getProfile);
        this.props.getProfile();
        this.props.getDonars();
        this.props.getPost();

    }
    profileToFalse = ()=>{this.setState({ isProfileModal : false})}
    donarToFalse = ()=>{ this.setState({ isDonarFromModal : false})}
    creatPostToFalse = ()=>{ this.setState({ isCreatePostModal : false})}
    
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={
                                    <Avatar src={this.props.profileData.photoURL} />
                                }
                            >
                                {this.props.profileData.name
                                }
                         </ListItem>
                        </List>
                        <RaisedButton onClick={()=>{
                            // console.log('Profile')
                            this.setState({isProfileModal : !this.state.isProfileModal})
                        }} label="Profile" primary={true} style={style} />
                        
                        <RaisedButton onClick={()=>{
                            // console.log('donate From')
                            this.setState({isDonarFromModal : !this.state.isDonarFromModal})
                        }} label="Donate Bood" primary={true} style={style} />


                        <RaisedButton onClick={()=>{
                            // console.log('donate From')
                            this.setState({ isCreatePostModal : !this.state.isCreatePostModal})
                        }} label="Create Post" primary={true} style={style} />


                        <NavLink to='/allpost'><RaisedButton label="All Post" primary={true} style={style} /></NavLink>
                        <NavLink to='/yourpost'><RaisedButton label="Your Post" primary={true} style={style} /></NavLink>
                        <NavLink to='/donarlist'><RaisedButton label="Donar List" primary={true} style={style} /></NavLink>
                        
                        <ProfileModal profileData={this.props.profileData} closeModal={this.profileToFalse} isOpen={this.state.isProfileModal}/>
                        <DonateForm closeModal ={this.donarToFalse}  isOpen={this.state.isDonarFromModal}/>
                        <CreatePost closeModal ={this.creatPostToFalse}  isOpen={this.state.isCreatePostModal}/>
                        {/* <Router> */}
                            <div>
                                <Route exact path='/allpost' component={AllPost}/>
                                <Route exact path='/yourpost' component={YourPost}/>
                                <Route exact path='/donarlist' component={DonarList}/>
                            </div>
                        {/* </Router> */}
                        {/* <OnePost/> */}
                        {/* <AllPost/> */}
                        {/* <DonarList/> */}
                        {/* {this.props.donarsList} */}

                    </div>
                </Router>
            </div>
        );
    }
}
let mapStateToProps = (state)=>{
    // console.log(state.BBReducer.donarList)
    return {
        profileData : state.BBReducer.profileData, 
        donarsList : state.BBReducer.donarList
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        getPost  : ()=>{ dispatch(BBAction.getPost())},
        getProfile : ()=>{ dispatch(BBAction.getProfile())},
        getDonars : ()=>{ dispatch(BBAction.getDonars())}
        
    }
}
// export default MainApplication;
export default connect(mapStateToProps, mapDispatchToProps)(MainApplication)