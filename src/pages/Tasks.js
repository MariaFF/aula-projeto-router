import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { Button, Table } from "reactstrap";
import axios from "axios";

import fakeAuth from "../helpers/fake-auth";

const TASKS = [
  {
    id: 1,
    title: "Aprender react js",
    description: "Aprederemos na primeira aula"
  },
  {
    id: 2,
    title: "Aprender react router",
    description: "Aprederemos na segunda aula"
  },
  {
    id: 3,
    title: "Aprender a ficar rico",
    description: "Fazer medicina"
  }
];

export default class Tasks extends Component {
  state = {
    tasks: []
  };

  onSairClick = () => {
    fakeAuth.setAuthenticated(false);
    this.props.history.push("/login");
  };

  renderTasks = () => {
    const { tasks } = this.state;
    return tasks.map(task => {
      return (
        <tr>
          <td>{task.id}</td>
          <td>
            <Link to={"/tasks/" + task.id}>{task.title}</Link>
          </td>
          <td>{task.userId}</td>
          <td>{task.completed ? "Sim" : "Não"}</td>
        </tr>
      );
    });
  };

  renderTasksDescription = routeProps => {
    console.log(routeProps);
    const taskId = parseInt(routeProps.match.params.taskId);
    const { tasks } = this.state;
    const task = tasks.find(task => {
      return task.id === taskId;
    });
    return <p>{task.title}</p>;
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        const { data } = response;
        this.setState({
          tasks: data
        });
      })
      .catch(err => {
        console.warn(err);
        alert(err.message);
      });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.onSairClick}>
          Sair
        </Button>
        {/* <ul>{this.renderTasks()}</ul> */}
        <Table dark>
          <thead>
            <tr>
              <th>Id</th>
              <th>Titulo</th>
              <th>Usuário</th>
              <th>Concluida</th>
            </tr>
          </thead>
          <tbody>{this.renderTasks()}</tbody>
        </Table>

        <br />
        <div>
          <Route path="/tasks/:taskId" render={this.renderTasksDescription} />
        </div>
      </div>
    );
  }
}
// renderTasks = () => {
//   return TASKS.map(task => {
//     return (
//       <li>
//         <Link to={"/tasks/" + task.id}>{task.title}</Link>
//       </li>
//     );
//   });
// };

// renderTasksDescription = routeProps => {
//   console.log(routeProps);
//   const taskId = parseInt(routeProps.match.params.taskId);
//   const task = TASKS.find(task => {
//     return task.id === taskId;
//   });
//   return <p>{task.description}</p>;
// };
