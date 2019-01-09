import React from "react";
import axios from "axios";
import Moment from "react-moment";

class CommitList extends React.Component {
  state = {
    commits: []
  };

  componentWillMount() {
    axios
      .get("https://api.github.com/repos/jkhoel/anzu-api/commits", {
        headers: { Authorization: "Basic amtob2VsOkFmajQ5T3Bx" }
      })
      .then(res => {
        this.setState({ commits: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { commits } = this.state;

    const list = commits
      .slice(0, 5)
      .map((item, index) => (
        <CommitItem commit={item.commit} author={item.author} key={index} />
      ));

    return (
      <div className="list-group pt-4 col-md-8 text-left">
        <h3>Latest Commits:</h3>
        {list}
      </div>
    );
  }
}

export default CommitList;

const CommitItem = props => {
  let authorBadge;
  if (props.author === null) {
    authorBadge = null;
  } else {
    authorBadge = (
      <a href={props.author.html_url}>
        <img
          src={props.author.avatar_url}
          alt=""
          className="rounded-circle float-left"
          style={{ maxWidth: "60px" }}
        />
      </a>
    );
  }

  return (
    <div className="list-item p-2 m-1 bg-dark rounded">
      {authorBadge}
      <div className="d-flex justify-content-between pl-2">
        <p className="mb-1">{props.commit.message}</p>
      </div>
      <div className="d-flex justify-content-between pl-2 text-muted">
        <small>By {props.commit.committer.name}</small>
        <small>
          <Moment fromNow>{props.commit.committer.date}</Moment>
        </small>
      </div>
    </div>
  );
};

// <CommitItem commit={item.commit} author={item.author} key={index} />
