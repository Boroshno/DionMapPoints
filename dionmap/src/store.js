import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        places: [
            {
                id: 1,
                name: 'Place 1',
                description: 'This is place 1',
                img1: 'https://example.com/image1.jpg',
                img2: 'https://example.com/image2.jpg',
                coordinates: [50.447209, 30.522450]
            },
            {
                id: 2,
                name: 'Place 2',
                description: 'This is place 2',
                img1: 'https://example.com/image3.jpg',
                img2: 'https://example.com/image4.jpg',
                coordinates: [50.4501, 30.5234]
            },
            //... more places
        ],
        selectedPlaces: [] // Placeholder for selected places
    },
      mutations: {
        // You would define mutations to update your state here
      },
      actions: {
        initializeMap(context) {
          var s = context;
          context = s;
        },
      },
      getters: {
        // You would define getters to access state in a more complex way here
      }
  })

  export default store;