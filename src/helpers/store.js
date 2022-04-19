import create from 'zustand'

const useStore = create((set) => {
  return {
    router: {},
    dom: null,
    mapFilterDate: 'All',
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
    }
  }
})

export default useStore
