  
import React from "react";

export default class FetchUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
    const url = "https://reqres.in/api/users?page=2";
    const response = await fetch(url);
    const data1 = await response.json();
    this.setState({ person: data1.data, loading: false });
  }
  renderTableHeader = () => {
    return Object.keys(this.state.person[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
  }
  renderTableRows = () => {
    return this.state.person.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
      <td> <img src={user.avatar} /></td>
          
        </tr>
      )
    })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        
        <table>
        <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
        <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      </div>
    );
  }
}