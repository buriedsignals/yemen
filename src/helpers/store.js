import create from 'zustand'

const useStore = create((set) => {
  return {
    router: {},
    dom: null,
    mapFilterDate: 'All',
    openChapters: false,
    openPopup: false,
    popupProperties: {
      date: "",
      description: "",
      fatalities: "",
      injuries: "",
      media_url: "",
      source_url: "",
      title: "",
      years: "",
    },
    summary: {
      indexChapter: 0,
      progress: 0
    }
  }
})

export default useStore
