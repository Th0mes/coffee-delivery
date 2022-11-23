import create from 'zustand'

interface CoffeeStore {
  filteredTags: Tag[]
  addFilteredTags: (tag: Tag) => void
  removeFilteredTags: (tag: Tag) => void
}

export const useCoffeeStore = create<CoffeeStore>()((set) => ({
  filteredTags: [],
  addFilteredTags: (tag: Tag) =>
    set(({ filteredTags }) => ({
      filteredTags: [...filteredTags, tag],
    })),
  removeFilteredTags: (tag: Tag) =>
    set(({ filteredTags }) => ({
      filteredTags: filteredTags.filter((t) => !t.includes(tag)),
    })),
}))
