import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={s.posts}>
            <h3>My post</h3>
            <textarea></textarea>
            <div>
                <button>Добавить пост</button>
            </div>
            <div>
                New post
            </div>
            <div>
                <Post like="57" dislike="12" date="31.08.2020" message="Наконец я начал учить реакт"/>
                <Post like="10432" dislike="1" date="22.06.2000" message="Толя кусок тупого дерьма"/>
            </div>
        </div>
    )
}

export default MyPost;