let defaultCity = 'Beijing'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (error) {}

export default {
  city: defaultCity
}
