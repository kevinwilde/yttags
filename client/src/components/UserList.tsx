import * as React from 'react';

interface User {
  id: number
  username: string
}

interface Props {}

interface State {
  users: User[]
}

class UserList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: []
    };
  }

  public componentDidMount() {
    fetch('/api/users/').then((resp) => {
      if (resp.status === 200) {
        resp.json().then(json => {
          // console.log(json);
          this.setState({users: json});
        })
      // } else {
        // console.error(resp);
      }
  });
  }

  public render() {
    const users = this.state.users.map(u => <li key={u.id}>{u.username}</li>);
    return <ul>{users}</ul>;
  }
}

export default UserList;
