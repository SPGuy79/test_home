document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the title and content from the form
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    // Create a new post element
    const post = document.createElement('div');
    post.classList.add('post');
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    const postContent = document.createElement('p');
    postContent.textContent = content;

    post.appendChild(postTitle);
    post.appendChild(postContent);

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            post.appendChild(img);
        }
        reader.readAsDataURL(imageFile);
    }

    // Add the new post to the board
    document.querySelector('.board').appendChild(post);

    // Clear the form
    document.getElementById('postForm').reset();
});