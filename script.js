function rewv() {
    // Get the values from the form
    const bookTitle = document.getElementById('book-title').value;
    const author = document.getElementById('author').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('review-text').value;

    // Create a new review element
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';

    // Fill in the review details
    reviewElement.innerHTML = `
        <h3>${bookTitle}</h3>
        <p>Author: ${author}</p>
        <p>Rating: ${rating}</p>
        <p>Review: ${reviewText}</p>
    `;

    // Append the new review to the reviews section
    const reviewsSection = document.querySelector('.sect');
    reviewsSection.appendChild(reviewElement);

    // Clear the form
    document.getElementById('book-title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('review-text').value = '';
}

