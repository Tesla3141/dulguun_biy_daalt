// Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
const apiEndpoint = 'http://localhost:8001/api_provider/bookworm/harryPotter';

// Function to fetch data from the API
async function fetchBooks() {
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        // Assuming the API returns an array of book objects
        data.forEach((book, index) => {
            const carouselItem = document.createElement('div');
            carouselItem.className = `carousel-item${index === 0 ? ' active' : ''}`;
            carouselItem.innerHTML = `  
            <div class="card mx-auto border-0 " style="width: 50rem; background-color: #E5F3FD;">
                <div class="row no-gutters" >
                    <div class="col-md-4">
                        <img src="${book.image}" class="card-img" alt="Book ${index + 1}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body" style="margin-left: 50px;">
                            <h5 class="card-title" style="font-size: 30px;">${book.title}</h5>
                            <div class="d-flex" style="gap: 50px;">
                                <p style="font-size: 20px; color: #dbbb18;">By ${book.author}</p>
                                <p style="font-size: 20px;">|</p>
                                <p style="font-size: 20px;">${book.rating}⭑</p>
                            </div>

                            <div style="height: 170px; ">
                              <p class="card-text" style="font-size: 15px;">${book.description}</p>
                            </div>
                            
                            <div style="height: 50px; ">
                              <p class="card-text" style="font-family: Arial,sans-serif; font-size: 50px;">$${book.price}</p>
                            </div>

                        </div>
                    </div>
                </div>
              </div>
            `;
            document.querySelector('.carousel-inner').appendChild(carouselItem);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchBooks function to populate the carousel with book data
fetchBooks();
