import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
import BBAction from '../../store/actions/BBAction';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
class DonateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isEdit: true,
    };
  }

  componentWillReceiveProps(props) {
    // console.log(props)
    // this.setState({ open: !this.state.open })
    // this.handleOpen();
    if (props.isOpen === true) {
      this.handleOpen();
      this.props.closeModal();

    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {

  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        // keyboardFocused={true}
        onClick={() => {
          console.log('Cancel');
          this.setState({ open: false });
        }}
      />, <FlatButton
        label="Doante Blood"
        primary={true}
        // keyboardFocused={true}
        onClick={() => {
          let donateData = {
            name : this.props.name , 
            age: this.props.age , 
            phone: this.props.phone , 
            address: this.props.address , 
            email: this.props.email , 
            bloodGroup: this.props.bloodGroup,
            photoURL : this.props.photoURL

          }
          this.props.addDonar(donateData);
          console.log('Doante Blood');
          this.setState({ open: false });
        }}
      />
    ];

    return (




      <div>

        <Dialog
          title="Donate Your BLood"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={() => {
            this.setState({ open: false });

          }}
        >
          Doante Your Blood

    <Card style={{ border: '1px solid lightgray', margin: 10 }}>
            <br />
            <TextField
              disabled
              hintText="Full Name"
              name='fullname'
              disabled
              value={this.props.name}
            /><br />
            <TextField
              value={this.props.email}
              type='email'
              hintText="Email"
              name='email'
              disabled
            /><br />
            <TextField
              value={this.props.bloodGroup}
              disabled
              name='bbgroup'
              

            /><br />
          </Card>




        </Dialog>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    name: state.BBReducer.profileData.name,
    age: state.BBReducer.profileData.age,
    phone: state.BBReducer.profileData.phone,
    address: state.BBReducer.profileData.address,
    email: state.BBReducer.profileData.email,
    bloodGroup: state.BBReducer.profileData.bloodGroup,
    photoURL : state.BBReducer.profileData.photoURL
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addDonar : (data)=>{ dispatch(BBAction.addDonar(data))},
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DonateForm)



//============================================================================================================
// import React from 'react';
// import Paper from 'material-ui/Paper';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';



// const style = {
//   height: 300,
//   width: 500,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

// class DonateForm extends React.Component {
//   render() {
//     return (

//       <div>
//         <Paper style={style} zDepth={2}>

//           <AppBar
//             title="Donate Blood"
//             showMenuIconButton={false} />
//           <TextField
//             hintText="Full Name"
//             name='fullname'
//           />
//           <TextField
//             type='email'
//             hintText="Email"
//             name='email'
//           /><br />
//           <TextField
//             value="O+"
//             name='bbgroup'
//           /><br />
//           <RaisedButton label = "Doante" style={{margin : 12}} />

//         </Paper>

//       </div>
//     )
//   }
// }

// export default DonateForm;