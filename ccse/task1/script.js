document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('container');





    // Fetch data from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            //Provide individual posts into card
            posts.forEach(post => {
                const blogCard = createBlogCard(post);
                blogContainer.appendChild(blogCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));





    // Function to create a card for a blog post
    function createBlogCard(post) {
        const blogCard = document.createElement('div');
        blogCard.className = 'blog-card';

        const title = document.createElement('h3');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        // Created delete button with class name for styling
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deletePost(post.id));

        blogCard.appendChild(title);
        blogCard.appendChild(body);
        blogCard.appendChild(deleteBtn);
        blogCard.setAttribute('data-post-id', post.id);

        return blogCard;
    }





    // Function to delete a post
    function deletePost(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (response.ok) {
                // Remove the deleted post card from the UI
                const postCard = document.querySelector(`.blog-card[data-post-id="${postId}"]`);
                if (postCard) {
                    postCard.remove();
                }
            } else {
                console.error('Error deleting post:', response.statusText);
            }
        })
        .catch(error => console.error('Error deleting post:', error));
    }
});
