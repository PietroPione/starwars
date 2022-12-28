export const state = () => ({
    popup: {
      url: null,
      type: null
    },
    counters: { people: 82, planets: 60, starships: 36
    }
  })
  export const mutations = {
    setPopupUrl (state, url) {
      state.popup.url = url
    },
    setPopupType (state, type) {
      state.popup.type = type
    }
  }
  export const actions = {
    showHideScroll (store, state) {
      if (process.client) {
        if (state) {
          document.body.style.top = `-${window.scrollY}px`
          document.body.style.position = 'fixed'
          document.body.style.width = '100%'
        } else {
          // const scrollY = document.body.style.top
          document.body.style.top = ''
          document.body.style.position = ''
          document.body.style.width = ''
          window.scrollTo(0, 0)
        }
      }
    },
    
  }
  