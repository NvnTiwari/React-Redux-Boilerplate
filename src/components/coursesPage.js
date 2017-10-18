import React , { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as courseAction from '../actions/courseAction';

class CoursesPage extends Component {
    constructor() {
        super();
        this.state = {
            course: { title : "" }
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
         this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h3>Course Page</h3>
                <h4>Add Course</h4>
                {this.props.courses.map(this.courseRow)}
                <input type="text" onChange={this.onTitleChange} value={this.state.course.title} />
                <input type="submit" value="save" onClick={this.onClickSave} />
            </div>
            )
    }
}

function mapStateToProps(state) {
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseAction ,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);