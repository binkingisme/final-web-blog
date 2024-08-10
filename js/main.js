// Function to fetch blog posts from an API
async function fetchBlogPosts() {
    try {
        const response = await fetch('https://api.example.com/blogposts');
        const posts = await response.json();
        displayBlogPosts(posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    }
}

// Function to display blog posts on the page
function displayBlogPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    postsContainer.innerHTML = ''; // Clear any existing posts

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.excerpt}</p>
            <button onclick="readMore(${post.id})">Read More</button>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Function to handle clicking on a blog post to read more
function readMore(postId) {
    // Logic to display the full post content
    console.log('Read more about post:', postId);
    // You can fetch the full post details and display them in a modal or a new page
}

// Add event listeners for user interactions
document.addEventListener('DOMContentLoaded', () => {
    fetchBlogPosts();
});

    // add how much views the post has
document.addEventListener('DOMContentLoaded', () => {
    fetchBlogPosts();
    fetchPostViews();
});

async function fetchPostViews() {
    try {
        const response = await fetch('https://api.example.com/postviews');
        const postViews = await response.json();
        displayPostViews(postViews);
    } catch (error) {
        console.error('Error fetching post views:', error);
    }
}

function displayPostViews(postViews) {
    const postsContainer = document.getElementById('posts-container');
    const postElements = postsContainer.getElementsByClassName('post');

    postViews.forEach((views, index) => {
        const postElement = postElements[index];
        const viewsElement = document.createElement('p');
        viewsElement.className = 'views';
        viewsElement.textContent = `Views: ${views.count}`;
        postElement.appendChild(viewsElement);
    });
}
