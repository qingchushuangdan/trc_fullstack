import React, {Component} from 'react';
import Comment from './Comment';
import CommentInput from './CommentInput';
class CommentList extends Component {
  render() {
    return (
      <div>
        <Comment/>
      </div>
    )
  }
}
export default CommentList;