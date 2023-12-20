// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
const getManyApiEndpoint = 'http://localhost:8001/api_provider/bookworm/manyBooks?size=24';

// Function to fetch data from the API
async function fetchBooks() {
    try {
        const response = await fetch(getManyApiEndpoint);
        const data = await response.json();

        const gridContainer = document.getElementById('gridContainer');
        // Assuming the API returns an array of book objects
        data.forEach(book => {
          const { title, author, imageLink } = book;
    
          // Create a grid cell for each book
          const gridCell = document.createElement('div');
          gridCell.classList.add('mb-grid-cell');
    
          // Create an image element
          const image = document.createElement('img');
          image.src = imageLink// "images/harry_potter_7.jpeg"//imageLink;
          image.alt = title;
          image.style.height = "147px";
          // image.style.width = 98;
    
          // Create paragraph elements for title and author
          const titleElement = document.createElement('p');
          titleElement.textContent = title;
    
          const authorElement = document.createElement('p');
          authorElement.textContent = `${author}`;
          authorElement.style.color = '#dbbb18';
    
          // Append elements to the grid cell
          gridCell.appendChild(image);
          gridCell.appendChild(titleElement);
          gridCell.appendChild(authorElement);
    
          // Append the grid cell to the grid container
          gridContainer.appendChild(gridCell);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchBooks function to populate the carousel with book data
fetchBooks();
