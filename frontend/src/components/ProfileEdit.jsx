import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input, Button } from 'antd'
let url = "http://localhost:3000/editprofile";
const serviceUpload = axios.create({ url, withCredentials: true });

export default class ProfileEdit extends React.Component {
  state = {
    //user: this.props.user,
    updateUser: {}
  };


  handleChange = e => {
    let { updateUser } = this.state;
    if (e.target.files) updateUser.profilePic = e.target.files[0];
    else updateUser[e.target.name] = e.target.value;
    this.setState({ updateUser });
  };

  submit = () => {
    let { user } = this.props;
    let { updateUser } = this.state;
    if (updateUser.profilePic) {
    this.uploadImage(updateUser.profilePic, url)
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e));
    }
    if(user.username !== updateUser.username || user.email !== updateUser.email){
      axios.post(url, {...updateUser}, { withCredentials: true })
        .then(res=> console.log(res))
        .catch(e => console.log(e));
    }
    this.props.history.push('/profile')
  };

  uploadImage = (file, url) => {
    let formData = new FormData();
    formData.append("profilePic", file);
    return serviceUpload
      .post(url, formData, {
        headers: { enctype: "multipart/form-data" }
      })
      .then(res => res.data)
      .catch(e => e);
  };

  render() {
    let { user, /* updateUser */ } = this.props;
    return (
      <div style={formStyle}>
        <img src={user.profilePic} alt="profilepic" height="250" />
        <input name="profilePic" type="file" onChange={this.handleChange} />
        <h3>
          Nuevo nombre de usuario :{" "}
          <Input
            name="username"
            type="text"
            placeholder={user.username}
            onChange={this.handleChange}
          />
        </h3>
        <p>
          Nuevo email:{" "} 
           <Input
            name="email"
            type="text"
            placeholder={user.email}
            onChange={this.handleChange}
          />
        </p>
        <Link to="/profile">
          <Button>Cancel</Button>
        </Link>
        <br/>
        <Button type="primary" onClick={this.submit}>Save Changes</Button>
      </div>
    );
  }
}



let formStyle = {
  paddingTop:"60px",
  display:"flex",
  flexDirection:"column",
  alignItems: "center"
}
