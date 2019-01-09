import React, { Component } from "react";
import PropTypes from "prop-types";
// import Moment from "moment";
import Moment from "react-moment";
import classnames from "classnames";
import { connect } from "react-redux";

import { getUnreadNotams, readNotam } from "../../actions/postActions";

class UserNotamPanel extends Component {
  state = {
    collapsed: false,
    notams: []
  };

  onToggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onAcknowledge = e => {
    e.preventDefault();
    this.props.readNotam(e.target.value);
    console.log(e.target.value);
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.getUnreadNotams();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.notams) {
      this.setState({
        notams: nextProps.notams
      });
    }
  }

  render() {
    let notams = this.state.notams.map((notam, index) => (
      <Notam
        date={notam.date}
        title={notam.title}
        body={notam.text}
        _id={notam._id}
        ident={index}
        key={index}
        onAcknowledge={this.onAcknowledge}
      />
    ));

    if (!this.state.notams.length > 0) {
      return null;
    }

    return (
      <div
        className={classnames("notam-feed p-3 rounded text-primary", {
          expanded: !this.state.collapsed
        })}
      >
        <div className="notam-collapse-icon">
          {this.state.collapsed ? (
            <span className="badge badge-danger mr-2">
              {this.state.notams.length} NOTAMS WAITING
            </span>
          ) : (
            ""
          )}
          <i
            className={classnames("", {
              "fas fa-caret-up": !this.state.collapsed,
              "fas fa-caret-down": this.state.collapsed
            })}
            onClick={this.onToggle}
            data-toggle="collapse"
            data-target="#notam-list"
          />
        </div>

        <div id="notam-list" className="collapse show">
          <h5 className="font-weight-bold notam-feed-title">NOTAMS</h5>
          <small>Click to read and acknowledge</small>
          <br />
          {notams}
        </div>
      </div>
    );
  }
}

UserNotamPanel.propTypes = {
  getUnreadNotams: PropTypes.func.isRequired,
  readNotam: PropTypes.func.isRequired,
  notams: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  notams: state.posts.notams_unread,
  auth: state.auth
});

export default connect(mapStateToProps, { getUnreadNotams, readNotam })(
  UserNotamPanel
);

const Notam = props => (
  <div>
    <div className="d-flex justify-content-between">
      <a
        className="notam-link mr-auto"
        href=""
        data-oldurl="/index.php/page/notam?id=231"
        data-toggle="modal"
        data-target={`#modal-${props.ident}`}
      >
        {props.title}
      </a>
      <small className="text-info">
        (<Moment fromNow>{props.date}</Moment>)
      </small>
    </div>

    <div
      className="modal fade"
      id={`modal-${props.ident}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`modal-${props.ident}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title" id={`modal-${props.ident}`}>
              Incoming Priority Transmission from 132nd Command
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
          <div className="modal-body">{props.body}</div>
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
              value={props._id}
              onClick={props.onAcknowledge}
              data-dismiss="modal"
            >
              Acknowledge Transmission
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
