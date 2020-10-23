# ACNH Villager Wish List 

ACNH Villager Wish List is a full stack wish list maker 
built with React, Typescript, Node, and PostgreSQL. 

ACNH Villager Wish List is [live on Netlify](https://acnhvwl.netlify.app/).

Users can browse for their favorite villagers and create a wish list for villagers they would love to have in their town. 
Users can click on a villager's image to view a bigger picture of the image. 
Wish lists can be exported to the user's clipboard.  


[![Screenshot of Demo Video](https://cdn.discordapp.com/attachments/709643259789705317/769330360516739132/unknown.png)](https://www.youtube.com/watch?v=7gzCTY59eqY)


## To Do 
- [x] Filter by animal type and personality
- [ ] Test routes and search functionality 

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
- Create user accounts that allow for saving and sharing wish lists 