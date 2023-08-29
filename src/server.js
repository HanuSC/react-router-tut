import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {

  let server = createServer({
    environment,
    models: {
      van: Model,
    },

    seeds(server) {
      server.create("van", {
        id: 1,
        model: 'Modest Explorer',
        price: 60, 
        category: 'Simple', 
        img: '/src/assets/modest_explorer.png', 
        content: 'The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!', 
        hostId: '123'

    })
      server.create("van", {
        id: 2,
        model: 'Beach Bum',
        price: 80, 
        category: 'Rugged', 
        img: '/src/assets/beach_bum.png', 
        content: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper'.", 
        hostId: '456'
    })
      server.create("van", {
        id: 3,
        model: 'Reliable Red',
        price: 100, 
        category: 'Luxury', 
        img: '/src/assets/reliable_red.png',
        content: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.", 
        hostId: '123'
    })
      server.create("van", {
        id: 4,
        model: 'Dreamfinder',
        price: 65, 
        category: 'Simple', 
        img: '/src/assets/dreamfinder.png', 
        content: 'Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.', 
        hostId: '456'
    })
      server.create("van", {
        id: 5,
        model: 'The Cruiser',
        price: 120, 
        category: 'Luxury', 
        img: '/src/assets/the_cruiser.png', 
        content: 'The Cruiser is a van for those who love to travel in comfort and Luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.', 
        hostId: '123'
    })
      server.create("van", {
        id: 6,
        model: 'Green Wonder',
        price: 120, 
        category: 'Rugged', 
        img: '/src/assets/green_wonder.png', 
        content: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.", 
        hostId: '456'
    })
    },

    routes() {
      this.namespace = "api"

      this.get("/vans", (schema) => {
        return schema.vans.all()
      })

      this.get("/vans/:id", (schema, request) => {
        let van = schema.vans.find(request.params.id)
      
        return {
          id: van.id,
          model: van.model,
          price: van.price, 
          category: van.category, 
          img: van.img, 
          content: van.content
        }
      })

      this.get('/host/vans', (schema) => {
        return schema.vans.where({hostId: '123'})
      })

      this.get("/host/vans/:id", (schema, request) => {
        
          const id = request.params.id
          return schema.vans.find(id)
      })
    },
  })

  return server
}

