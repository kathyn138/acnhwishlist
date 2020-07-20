# ACNH Villager Wish List 

ACNH Villager Wish List is a full stack wish list maker 
built with React, Typescript, Node, and PostgreSQL. 

It is currently a work in progress. 

Users can browse for their favorite villagers and create a wish list for villagers they would love to have in their town. 
Wish lists can be exported to the user's clipboard.  

![Screenshot of Demo](https://cdn.discordapp.com/attachments/709285942430531650/734586758645284904/demo-screenshot.png)

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
│  └─┬ Home
│    ├── SearchBar  
│    └── VillagerCard    
└─┬ Wishlist
  └── WishlistCard
```

## Future Implementations
- Zoom in when clicking on a villager's picture