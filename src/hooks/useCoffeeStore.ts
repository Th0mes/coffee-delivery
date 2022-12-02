import create, { StateCreator } from 'zustand'

interface TagSlice {
  filteredTags: Tag[]
  addFilteredTags: (tag: Tag) => void
  removeFilteredTags: (tag: Tag) => void
}

const createTagSlice: StateCreator<CoffeeStore, [], [], TagSlice> = (set) => ({
  filteredTags: [],
  addFilteredTags: (tag) =>
    set(({ filteredTags }) => ({
      filteredTags: [...filteredTags, tag],
    })),
  removeFilteredTags: (tag) =>
    set(({ filteredTags }) => ({
      filteredTags: filteredTags.filter((t) => !t.includes(tag)),
    })),
})

interface CoffeeSlice {
  coffees: Coffee[]
  addCoffee: (coffee: Coffee) => void
  removeCoffee: (coffeeId: string) => void
}

const createCoffeeSlice: StateCreator<CoffeeStore, [], [], CoffeeSlice> = (
  set
) => ({
  coffees: [],
  addCoffee: (coffee) =>
    set(({ coffees }) => ({
      // change to async and create axios post method
      coffees: [...coffees, coffee],
    })),
  removeCoffee: (id) =>
    set(({ coffees }) => {
      // change to async and create axios delete method
      const coffeeId = coffees.findIndex((c) => c.title === id)

      return {
        coffees: coffees.splice(coffeeId, 1),
      }
    }),
})

type CoffeeStore = TagSlice & CoffeeSlice

export const useCoffeeStore = create<CoffeeStore>()((...a) => ({
  ...createTagSlice(...a),
  ...createCoffeeSlice(...a),
}))
