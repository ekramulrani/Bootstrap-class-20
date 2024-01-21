const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const dropdown = new bootstrap.Dropdown(element, {
    popperConfig(defaultBsPopperConfig) {
      // const newPopperConfig = {...}
      // use defaultBsPopperConfig if needed...
      // return newPopperConfig
    }
  })
  