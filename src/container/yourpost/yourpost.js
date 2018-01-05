import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import YourOnePost from "../onepost/youronepost";
import { connect } from "react-redux";
class YourPost extends React.Component {

    render() {
        // let post = this.props.onePost;
        // console.log(post)
        return (
            <Card>
                    {
                    //    console.log(Object.keys(this.props.allPost)) 
                            // [1,1,1,1,1,,11,1,1,1].map((v,i)=>{
                            //     return <OnePost key={i}/>
                            // })
                        // .map((val,index)=>{
                        //     // console.log(val,index)
                        //     let onePost = this.props.allPost[val];
                        //     console.log(true)
                        //     return (<OnePost  />)
                        // })

                       Object.keys(this.props.yourPost).map((val,index)=>{
                           let onePost = this.props.yourPost[val];
                        //    console.log(val, index);
                           return (
                               <YourOnePost key={val} postKey={val} profileData={this.props.profileData} post={onePost}/>
                           )
                       })
                    }
            </Card>   
        );
    }
}


// export default AllPost;
let mapStateToProps = (state)=>{
    return {
        yourPost : state.BBReducer.yourPost,     
       profileData : state.BBReducer.profileData

    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        naem  : ' naisr'
    }   
}
export default connect(mapStateToProps, mapDispatchToProps)(YourPost)