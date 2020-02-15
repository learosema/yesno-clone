This is a clone of the https://yesno.wtf/ API service.

The backend is an express server with a single `/api/yesno` endpoint. It consumes the GIPHY API to provide random gifs per request.
The frontend is a parcel react typescript app.

I created this project to learn how to proxy an API backend server to the parcel dev server.

## Demo

https://cyclic-answer-cp5suop80n.glitch.me/

## Running it locally

* Add a GIPHY_API_KEY into the `backend/.env` file (see example.env there)
* `npm install` in the root folder
* `npm install` in the backend folder
* `npm install` in the frontend folder
* `npm start`
