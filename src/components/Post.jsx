import '../styles/styles.css'

function Post({id, title, author, onPostClick }){
    return (
        <div className="post" onClick={() => onPostClick({ id, title, author })}>
            <h3>Id: {id}</h3>
            <h3>Title: {title}</h3>
            <h3>Author: {author}</h3>
        </div>
    )
}

export default Post;