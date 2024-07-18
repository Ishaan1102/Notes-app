import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';

const App = () => {
    const [modelVisible, setModelVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [posts, setPosts] = useState([]);



    const getAllPosts = async () => {
        const res = await fetch(`http://localhost:8000/posts/`);
        const data = await res.json();
        if (res.ok) {
            setPosts(data);
        }
    };

    const createNote = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:8000/posts/`, {
            method: 'POST',
            headers: { 'Content-Type': 'Application/Json' },
            body: JSON.stringify({ title, content })
        });
        if (res.ok) {
            setTitle('');
            setContent('');
            setModelVisible(false);
            getAllPosts();
        }
    };

    const deleteItem = async (noteId) => {
        await fetch(`http://localhost:8000/posts/${noteId}/`, { method: 'DELETE' });
        getAllPosts();
    };

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div>
            <div className='header'>
                <div className="logo"><p className="title">NOTE BOOK</p></div>
                <div className="add-section">
                    <button className="add-bttn" onClick={() => setModelVisible(true)}>Add Note</button>
                </div>
            </div>
            {modelVisible && (
                <div className={modelVisible ? 
                            'model model-visible' 
                            : 
                            'model model-not-visible'
                            }>
                    <NoteForm 
                        title={title} 
                        setTitle={setTitle} 
                        content={content} 
                        setContent={setContent} 
                        createNote={createNote} 
                        onClose={() => setModelVisible(false)}
                    />
                </div>

            )}
            {posts.length > 0 ? (
                <NoteList posts={posts} deleteItem={deleteItem} />
            ) : (
                <p className="centreText">No Posts</p>
            )}
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
