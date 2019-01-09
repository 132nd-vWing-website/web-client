import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Redirect } from "react-router-dom";

import AdminActions from "../AdminActions";
import Schema from "../admin-schema";

import TextFieldGroup from "../../ui/forms/TextFieldGroup";
import TextAreaFieldGroup from "../../ui/forms/TextAreaFieldGroup";
import Modal from "../../ui/Modal";

import {
  getNotams,
  createNotam,
  deleteNotam,
  updateNotam
} from "../../../actions/postActions";

import findOne from "../../../utils/findOne";

class EditNotams extends Component {
  state = {
    notams: []
  };

  onCreateNotam = data => {
    const notamData = {
      title: data.title,
      text: data.text
    };
    this.props.createNotam(notamData);
  };

  onSaveNotam = data => {
    const notamData = {
      _id: data.id,
      title: data.title,
      text: data.text
    };
    this.props.updateNotam(notamData);
  };

  onDeleteClick = id => {
    this.props.deleteNotam(id);
    console.log("delete: %s", id);
  };

  componentDidMount() {
    this.props.getNotams();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notams) {
      this.setState({ notams: nextProps.notams });
    }
  }

  render() {
    let { notams } = this.state;
    let { user } = this.props.auth;
    let validRoles = [];

    // Find all schemas for this module
    Schema.forEach(schema => {
      if (schema.id === "notam") {
        validRoles.push(...schema.validRoles);
      }
    });

    // Send the user back to the landingpage if he doesn't have the correct roles
    if (!findOne(validRoles, user.roles)) {
      return <Redirect to="/" />;
    }

    // let items = this.props.notams.map(notam => (
    let items = notams.map(notam => (
      <tr key={notam._id}>
        <td>{notam.title}</td>
        <td>{notam.user}</td>
        <td>
          <Moment format="DD/MM/YYYY">{notam.date}</Moment>
        </td>
        <td className="btn-group mb-4" role="group">
          <button
            className="btn btn-outline-info btn-sm"
            data-toggle="modal"
            data-target={`#modal-${notam._id}`}
          >
            Edit
          </button>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={this.onDeleteClick.bind(this, notam._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ));

    // let modals = this.props.notams.map((notam, index) => (
    let modals = notams.map((notam, index) => (
      <EditDialogue key={index} notam={notam} onClick={this.onSaveNotam} />
    ));

    return (
      <div
        id="panel"
        className="col-sm-12 col-md-11 p-0"
        style={{ minHeight: "100vh" }}
      >
        <div
          id="panel-items"
          className="position-relative"
          style={{ overflow: "auto", height: "100vh" }}
          data-spy="scroll"
          data-target="#item-pills"
          data-offset="0"
        >
          <div className="row align-items-center">
            <div className="w-75 mt-5 m-auto bg-white rounded p-3">
              <div>
                <h1>NOTAMs</h1>
                <p className="lead text-muted">Manage Messages</p>

                <div className="btn-group mb-4" role="group">
                  <AdminActions />
                </div>
                <div>
                  <button
                    className="btn btn-sm mb-1"
                    data-toggle="modal"
                    data-target={`#modal-add-new`}
                  >
                    + Add New
                  </button>
                  <EditDialogue
                    notam={{
                      _id: "add-new",
                      title: "Title of your NOTAM",
                      text: "Text here.."
                    }}
                    onClick={this.onCreateNotam}
                  />
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Author</th>
                      <th>Date</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>{items}</tbody>
                  <tfoot />
                </table>
                {modals}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EditNotams.propTypes = {
  getNotams: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  notams: PropTypes.array
};

const mapStateToProps = state => ({
  auth: state.auth,
  notams: state.posts.notams_all
});

export default connect(mapStateToProps, {
  getNotams,
  createNotam,
  deleteNotam,
  updateNotam
})(EditNotams);

/////////////////////////////////////////////////////////////////////////////////

/**
 * @description Component with the dialogue for editing NOTAMs
 */
export class EditDialogue extends Component {
  state = { id: "", title: "", text: "", errors: {} };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (this.props.notam) {
      this.setState({
        id: this.props.notam._id,
        title: this.props.notam.title,
        text: this.props.notam.text
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.notam) {
      this.setState({
        id: nextProps.notam._id,
        title: nextProps.notam.title,
        text: nextProps.notam.text
      });
    }
  }

  render() {
    const { errors } = this.state;
    const { notam } = this.props;

    return (
      <Modal id={notam._id}>
        <div className="modal-header">
          <p className="modal-title" id={`modal-${notam._id}`}>
            Edit Notam
          </p>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form onSubmit={this.props.onClick.bind(this, this.state)}>
            <TextFieldGroup
              placeholder={notam.title}
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              error={errors.title}
            />
            <TextAreaFieldGroup
              placeholder={notam.text}
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
              info={"You can use Markdown to format your message"}
            />
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-info"
            value={notam._id}
            onClick={this.props.onClick.bind(this, this.state)}
            data-dismiss="modal"
          >
            Save
          </button>
        </div>
      </Modal>
    );
  }
}
