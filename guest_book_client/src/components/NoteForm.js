import React from 'react';

const NoteForm = ({ title, setTitle, content, setContent, createNote, onClose }) => {
    return (
        <div className="form">
            <div className="form-header">
                <p className="form-header-text">Create a Note</p>
                <button className='close-bttn' onClick={onClose}>X</button> 
            </div>
            <form onSubmit={createNote}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        name="content"
                        id="content"
                        cols="30"
                        rows="15"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className='form-control'
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" value="Save" className='btn' />
                </div>
            </form>
        </div>
    );
};

export default NoteForm;
