#  TITAN recruitment process home task
   conume new API unsplsh
   creatin CRUD(only CR)

## Description
   Create an endpoint that gets a number and returns a list of photo URLs. Those URLs
   should be generated via the Unsplash API - https://unsplash.com/developers. Pay
   attention that Unsplash has a rate limit, so you probably want to use cache/mock to
   overcome it.

   Create an endpoint that gets details of an order and store it in the database. The
   endpoint should return the created order JSON. The details: email, full name, full
   address, images URLs, frame color, user.

   Create an endpoint that returns a list of all the orders of a specific user
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Installation
   npm i

## usage
   1 get numbers of url photos 
      http://localhost:5000/photos/5 will return 5 items
         [
            "https://images.unsplash.com/photo-1717397075045-8b4e0da1b41c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1718227695331-eb3ef0e53c66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1718725622477-297fcc090874?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1718776300369-aa9d15e29a9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1719403472550-2789cefb3da3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85"
        ]

   2 post new order
      send post http://localhost:5000/orders

      body will be 
         {
    "email": "titan@test.com",
    "fullName": "Titan HT",
    "fullAddress" : "Tel Aviv Azrieli",
    "imagesUrls": [
    "https://images.unsplash.com/photo-1717397075045-8b4e0da1b41c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1718227695331-eb3ef0e53c66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1718725622477-297fcc090874?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1718776300369-aa9d15e29a9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1719403472550-2789cefb3da3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85"
],
    "frameColor": "transparent",
    "userID": "test2"
}

   3 get user orders 
      http://localhost:9999/orders/test2

         [
    {
        "_id": "66866c0e297e8465b2d9b466",
        "email": "titan@test.com",
        "fullName": "Titan HT",
        "fullAddress": "Tel Aviv Azrieli",
        "imagesUrls": [
            "https://images.unsplash.com/photo-1717397075045-8b4e0da1b41c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1718227695331-eb3ef0e53c66?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1718725622477-297fcc090874?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1718776300369-aa9d15e29a9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85",
            "https://images.unsplash.com/photo-1719403472550-2789cefb3da3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2Mjk2NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjAwODUwMTl8&ixlib=rb-4.0.3&q=85"
        ],
        "frameColor": "transparent",
        "userID": "test2",
        "__v": 0
    }
]
### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shlomijs/titanHT.git
   cd titanHT
