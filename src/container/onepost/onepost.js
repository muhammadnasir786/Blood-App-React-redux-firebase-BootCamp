import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import * as firebase from 'firebase';
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
class OnePost extends React.Component {

    render() {
        let post = this.props.post;
        // console.log(post.userPhotoURL)
    
        return (
            <Card style={cardStyle}>
                         <List>
                            <ListItem
                                disabled={true}
                                leftAvatar={<Avatar src={post.userPhotoURL} />}
                                // rightIcon={ <span>Date : 12-2-2019</span>}
                                >
                                <p style={{ fontSize : 25  , marginBottom : -15 , marginTop : -5}}>{post.userName}</p>
                         </ListItem>
                        </List>
                        <hr/>
                <h3>Blood Group <span style={style}>{post.bloodGroup}</span></h3>
                <h2>{post.noOfUnitRequird} unit Required In {post.hospital} Hospital <span>{`${post.city} , ${post.country}`}</span> </h2>
                <p><i>{post.information}</i></p>
                <p>Contact No : <span>{post.contactNo}</span></p>
                <p>Urgency : <span>{post.urgency}Days</span></p>
                <p>Relation with Patient : <span>{post.relation}</span></p>
            </Card>
        );
    }
}

export default OnePost;