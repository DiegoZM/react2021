import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import {Table, User} from './Components/Table';

import { Form } from './Components/Form';

type MyState = {
  users: User[];
}


class  App extends React.Component<{}, MyState>  {
  state:MyState ={
    users:[]
  }

  removeUser = (index:any) => {
    const { users } = this.state
    this.setState({
      users: users.filter((_, i)=>{
        return i !== index
      }),
    })
  }

  handleSubmit = (user:User) => {
    this.setState({users:[...this.state.users, user]})
  }
  render(){
    return (
      <div className="container">
          <Table users={this.state.users} removeUser={this.removeUser}/>
          <Form handleSubmit={this.handleSubmit}/>    
      </div>
    );
  }
  }
  
  


export default App;
