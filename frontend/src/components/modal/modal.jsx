import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewDreamContainer from '../dreams/new_dream_container';
import CommentGoalModal from '../feed/comment_modal_goal';
import CommentDreamModal from '../feed/comment_modal_dream';
import { fetchCommentsByDream } from '../../actions/comment_actions';

const Modal = ({ modal, closeModal, info, fetchCommentsByDream, comments }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'newDream':
            component = <NewDreamContainer  />;
            break;
        case 'commentGoal':
            component = <CommentGoalModal info={info} fetchCommentsByDream={fetchCommentsByDream} comments={comments} />;
            break;
        case 'commentDream':
            component = <CommentDreamModal info={info} fetchCommentsByDream={fetchCommentsByDream} comments={comments} />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal} >
            <div className="modal-child" onClick={e => e.stopPropagation()} >
                <span onClick={closeModal} className="close-modal-btn">&#x2715;</span>
                { component }
                {/* <NewDreamContainer /> */}
            </div>
        </div>
    )
}

const mapSTP = state => ({
    modal: state.ui.modal,
    currentUser: state.session.user,
    info: state.modalInfo,
    comments: state.comments
})

const mapDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchCommentsByDream: (dreamId) => dispatch(fetchCommentsByDream(dreamId)),
})

export default connect(mapSTP, mapDTP)(Modal);