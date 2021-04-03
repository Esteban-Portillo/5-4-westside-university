import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students : []
    }
    


  }

  componentDidMount ()  {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
     .then(res => {
       this.setState({ students: res.data })
      //  console.log(res)
     })
    
  }

  render() {
    console.log(this.state.students)
    const eachStudent = this.state.students.map((e,i) => {
      return(
        <Link to = {`/student/${e.id}`} key = {i}>
          <h3 > {e.first_name} {e.last_name}</h3>
        </Link>
      )
    })

    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {eachStudent}

      </div>
    )
  }
}