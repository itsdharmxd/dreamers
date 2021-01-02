import React from 'react';
import { Link } from 'react-router-dom';

class GoalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: this.props.tags
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleOpenEditModal = this.handleOpenEditModal.bind(this);
    }

    handleOpenModal(e) {
        this.props.clearComments();
        this.props.fetchCommentsByDream(this.props.dream._id);
        this.props.openModal('commentGoal');
        this.props.modalInfo(this.props.dream);
    }

    handleOpenEditModal(e) {
        this.props.openModal('newDream');
        this.props.modalInfo(this.props.dream);
    }

    render() {
        let { dream, currentUser } = this.props;
        let tags;

        if (this.state.tags){
            tags = 
                this.state.tags.map((tag, idx) => {
                    if (tag != null){
                        return (
                            <Link to={`/tags/${tag}`} key={idx} style={{ textDecoration: 'none' }} >

                                <div className="new-dream-tags-item-container" onClick={e => e.stopPropagation()} >
                                    <div className="new-dream-tags-item-circle" ></div>
                                    <p className="new-dream-tags-item" >{tag}</p>
                                </div>
                            </Link>
                        )
                    }
                    
                })
            
        } else {
            tags = null
        }

        return (
            <div className="feed-goals-wrapper" >
                <div className="feed-dreams-edit-pencil" onClick={this.handleOpenEditModal} >
                    {currentUser.id === dream.userId ?
                        <i className="fas fa-pencil-alt"></i>
                        : ""}
                </div>
                <div className="feed-goals" onClick={this.handleOpenModal} >
                    {/* <Link to={`/dreams/${dream._id}`} style={{ textDecoration: 'none' }} > */}
                        <div className="new-dream-tags-container" >
                            <div className="new-dream-tags" >
                                {tags}
                            </div>
                        </div>
                        <p className="feed-goals-info" >
                            <Link to={`/users/${dream.userId}`} className="feed-goals-info-link" style={{ textDecoration: 'none' }}>
                                {dream.username}
                            </Link>
                        </p>
                        <p className="feed-goals-info" >{dream.text}</p>
                    {/* </Link> */}
                    <div className="feed-goals-footer" >
                        <p className="feed-goals-footer-info" >3 <span className="feed-goals-footer-comments" >comments</span></p>
                        <p className="feed-goals-footer-info" >3 <span className="feed-goals-footer-likes" >likes</span></p>
                    </div>
                </div>
            </div>
        )
    }
}


export default GoalItem;