# Flatdango
Flatiron Movie Theater is open for business! You will be building out an
application, Flatdango, that allows a user to purchase movie tickets from the
theater.
## Setup
Run the following command to kickstart the backend
json-server --watch db.json

Test your server by visiting this route in the browser:
(http://localhost:3000/films)

Then, open the `index.html` file on your browser to run the application

Write your code in the `src/index.js` file. The base URL for your API will be
(http://localhost:3000).

## Deliverables

As a user, I can:
See the first movie's details, including its **poster, title, runtime,
   showtime, and available tickets** when the page loads. The number of
   available tickets will need to be derived by subtracting the number of
   `tickets_sold` from the theater's `capacity`

See a menu of all movies on the left side of the page in the `ul#films`
   element when the page loads. (_optional_: you can style each film in the list
   by adding the classes `film item` to each `li` element.) There is a
   placeholder `li` in the `ul#films` element that is hardcoded in the HTML —
   feel free to remove that element by editing the HTML file directly, or use
   JavaScript to remove the placeholder element before populating the list.

Buy a ticket for a movie. After clicking the "Buy Ticket" button, I should
   see the number of available tickets decreasing on the frontend. I should not
   be able to buy a ticket if the showing is sold out (if there are 0 tickets
   available)

## Author
Daniel Muchiri

## License
ISC