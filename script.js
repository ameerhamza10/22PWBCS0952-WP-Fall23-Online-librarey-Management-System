document.addEventListener("DOMContentLoaded", function () {
    const bookContainer = document.getElementById('bookContainer');

    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(book => {
                const card = `
                    <div class="card col-md-5  m-3" style="border:0.7px solid black;">
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="${book.cover_image}" class="card-img w-100 h-100" alt="${book.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${book.title}</h5>
                                    <p class="card-text">${book.author}</p>
                                    <p class="card-text">${book.category}</p>
                                    <p class="card-text">$${book.price.toFixed(2)}</p>
                                    <p class="card-text">${book.description}</p>
                                    <button onclick="addToCart()" class="btn btn-primary addToCart" data-id="${book.id}">Add to Cart</button>
                                    <button onclick="viewCart()" class="btn btn-primary viewCart" data-id="${book.id}">View Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                bookContainer.innerHTML += card;
            });

            document.querySelectorAll('.addToCart').forEach(btn => {
                btn.addEventListener('click', addToCart);
            });

            document.querySelectorAll('.viewCart').forEach(btn => {
                btn.addEventListener('click', viewCart);
            });

            function addToCart() {
                let count=0;
                count++;
                const cart=document.getElementById("cart");
                cart.innerHTML=count;
                console.log(`Book with ID ${bookId} added to cart.`);
            }

            function viewCart() {
                
                console.log("View Cart clicked.");
            }
        })
        .catch(error => console.error('Error:', error));
});

