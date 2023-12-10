// Sample data (replace this with your data)
const blogPosts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  // Add more posts as needed
];

document.addEventListener('DOMContentLoaded', () => {
  const blogList = document.getElementById('blog-list');

  // Render blog posts on the main page
  blogPosts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
      <button onclick="viewPost(${post.id})">Read More</button>
    `;
    blogList.appendChild(postElement);
  });
});

// Function to view a full blog post
function viewPost(postId) {
  const post = blogPosts.find(post => post.id === postId);
  if (post) {
    // Redirect to the post page with the specific post
    window.location.href = `post.html#${postId}`;
  }
}

// Function to load post details on the post page
function loadPostDetails() {
  const postId = window.location.hash.substring(1);
  const post = blogPosts.find(post => post.id.toString() === postId);

  if (post) {
    document.getElementById('post-title').innerText = post.title;
    document.getElementById('post-content').innerHTML = `<p>${post.content}</p>`;
  } else {
    // Redirect to the main page if the post is not found
    window.location.href = 'index.html';
  }
}

// Load post details when the post page is loaded
document.addEventListener('DOMContentLoaded', loadPostDetails);
