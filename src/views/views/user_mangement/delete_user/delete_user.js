import React, { Component } from "react";
import * as userAction from "../../../redux/actions/user_mangement/add_user";
import { connect } from "react-redux";
import Autotext from "../../share_component/autocomplete_search/user_delete_auto";

class delete_user extends Component {
  state={
    name : 'User Delete',
    id:"",
    text:''
  }
  remove = (name) => {
    // this.props.deleteUser(id);
    // this.setState({text:name, id:this.props.users.id})
    console.log("id",this.state.id,"suri");
    console.log("id",this.state.text,"suri");
  };
  render() {
    return (
      <div>
        {/* {this.props.users}
        <button onClick={this.remove}> X</button> */}
        <Autotext 
        // passing user name  
        items = {this.props.users.map(i=>i.name)}
        // passing user id  
        id={this.props.users.map(i=>i.id)}
        // passing button name to make dynamic button name
        Name={this.state.name}
        deleteUser={this.remove}
        />
      </div>
    );
  }
}
// geting  values from store redux
const mapStateToProps = (state, ownProps) => {
  return {
    users: state.usermangement
  };
};
// dispatching actions to  store redux
const mapDispatchToProps = dispatch => {
  return {
    deleteUser: index => dispatch(userAction.deleteUser(index))
  };
};
// connecting to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(delete_user);

// import React, { Component } from "react";
// import { connect } from 'react-redux';
// import * as userAction from '../../../redux/actions/user_mangement/add_user';

// class delete_user extends Component {
//   // deleteUser = (e, index) => {
//   //   e.preventDefault();
//   //   this.props.deleteUser(index);
//   // };
//   listView(data, index) {
//     return (
//       // <button
//       //   onClick={e => this.deleteUser(e, index)}
//       //   className="btn btn-danger"
//       // >
//       //   Remove
//       // </button>
//     );
//   }
//   render() {
//     return (
//       <div>
//         {/* <button
//           onClick={e => this.deleteUser(e, index)}
//         >
//           Remove
//         </button> */}
//         <ul>{this.props.users.map(name=><li>name</li>)}</ul>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//   return {
//     users: state.usermangement
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return {
//     deleteUser: index => dispatch(userAction.deleteUser(index))
//   };
// };
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(delete_user);
