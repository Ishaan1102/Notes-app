import React from 'react';
import { Note } from './Note';

const NoteList = ({ posts, deleteItem }) => {
    return (
        <div className="post-list">
            {posts.map(item => (
                <Note
                    key={item.id}
                    title={item.title}
                    content={item.content}
                    onclick={() => deleteItem(item.id)}
                />
            ))}
        </div>
    );
};

export default NoteList;
