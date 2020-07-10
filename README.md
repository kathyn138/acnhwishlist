# Animal Crossing Villager Wish List 

Animal Crossing Villager Wish List (pending name) is a full stack 
villager wish list maker built with React, Typescript, Node, and PostgreSQL. 

It is currently a work in progress. 

Users can browse for their favorite villagers and create a wish list for villagers they would love to have in their town. 
Wishlists can be exported to the user's clipboard.  

![Mockup of Cranky Page](frontend/src/assets/cranky-demo.png "Screenshot of Cranky Demo")

## To Do 
- [x] Create database of villagers 
- [x] Create pg dump file of database 
- [x] Create personality and search routes
- [x] Add routes to front end 
- [x] Filter by animal type and personality
- [ ] Test routes and search functionality 
- [ ] Incorporate acknowledgements/further links section 

## Component Hierarchy 
```
App
├── NavBar
├──┬ Routes
│  ├─┬ Home
│  │ ├── SearchBar  
│  │ └── VillagerCard 
│  └─┬ VillagerList
│    ├── SearchBar  
│    └── VillagerCard
└─┬ Wishlist
  └── WishlistCard
```

## Future Implementations
- Zoom in when clicking on a villager's picture