function NewPost(props) {

    // Sign user in based on sign in fields.
    const sendNewPost = () => {
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        fetch("https://vast-brushlands-96580.herokuapp.com/api/posts/new", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: props.user.username,
                title: title,
                content: content,
            })
        })
            .then(res => res.json())
            .then(data => {


            })
            .catch(err => console.log('error: ' + err));

    }

    return (
        <div id="post-form">

            {props.user ?
                props.user.admin ?
                    <div id='post-form'>
                        <h2>New Post</h2>

                        <label htmlFor='title'> Title </label>
                        <input id='title' name='title'></input>

                        <label htmlFor='content'> Content </label>
                        <input id='content' name='content'></input>

                        <button type='submit' onClick={sendNewPost}> Submit </button>
                    </div>

                    : <div>
                        Must be admin to post.
                    </div>

                :

                <div>
                    Please sign in to post.
                </div>
            }



        </div>
    );
}

export default NewPost;