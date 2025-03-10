import Post from './Post'
import '../styles/styles.css'

function Posts({ posts, onPostClick  }) {
    return (
        <div className="posts-container">
            {posts.map(post =>
                <Post key={post.id} id={post.id} title={post.title} author={post.author} onPostClick={onPostClick}></Post>)}
        </div>
    )
}

export default Posts;