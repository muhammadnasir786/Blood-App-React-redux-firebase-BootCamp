import React, { Component } from 'react'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import Avatar from 'material-ui/Avatar';

import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from "react-redux";
class DonarList extends Component {
    constructor(){
        super();
        this.state = {
            value :  1
        }
    }
    render() {
        
        console.log(this.state.value)
        return (
            <div>
                <p style={{ fontSize: '20px' }}>Select your Blood Group </p>

                <DropDownMenu value={this.state.value} style={{}} 
                onChange={(e,i,val)=>{ this.setState( {value : val})}} >
                    <MenuItem value={1} primaryText="Blood Group" disabled />
                    <MenuItem value='A+' primaryText="A+" />
                    <MenuItem value='B+' primaryText="B+" />
                    <MenuItem value='AB+' primaryText="AB+" />
                    <MenuItem value='O+' primaryText="O+" />
                    <MenuItem value='O-' primaryText="O-" />
                    <MenuItem value='AB-' primaryText="AB-" />
                    <MenuItem value='B-' primaryText="B-" />
                    <MenuItem value='A-' primaryText="A-" />
                </DropDownMenu>
                <br />
                <center> <p style={{ fontSize: '20px', color: 'red' }}>Available Donors: </p> </center>



                <Table adjustForCheckbox={false}>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Contact No</TableHeaderColumn>
                            <TableHeaderColumn>Image</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                            <TableHeaderColumn>Blood Group</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                    
                        {Object.keys(this.props.donarList).map( (val, i)=> {
                            // console.log(this.props.donarList[val].bloodGroup[0])
                            let donar = this.props.donarList[val];
                            
                            
                                {if(this.props.donarList[val].bloodGroup == this.state.value ){
                                   return <TableRow key={i}>
                                            {console.log(donar)}
                                            <TableRowColumn>{donar.name}</TableRowColumn>
                                            <TableRowColumn>{donar.phone}</TableRowColumn>
                                            <TableRowColumn><Avatar src={donar.photoURL} /></TableRowColumn>
                                            <TableRowColumn>{donar.email}</TableRowColumn>
                                            <TableRowColumn>{donar.bloodGroup}</TableRowColumn>
                                    </TableRow> 
                                
                            }
                            }
                        
                        })}
                        {/* {console.log(this.props.donarList)} */}
          
                    </TableBody>
                </Table>
            </div>
        )
    }
}

let mapStateToProps = (state)=>{
        
        console.log(state.BBReducer.donarList)
    return {
        donarList : state.BBReducer.donarList
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DonarList)