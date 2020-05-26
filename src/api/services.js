import axios from 'axios'
import store from '../store'

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
// Salvar (list, obj) { list.push(obj) },
/* getAll, getRecord, createRecord, updateRecord, deleteRecord  */

var _auth = {}
var _records = []
var _record = {}

const getToken = (store) => store.getters['auth/token']
const getUrl = (store) => store.getters['baseUrl']

export default {
   async getLogin (payload){
      const data = payload.data
      await axios({
         url: getUrl(store) + payload.url,
         method: 'POST',
         auth: {
            username: data.username,
            password: data.password
          },
         // data
         })
         .then(response => {
            _auth = response.data
         })
      return _auth
   },

   getRecords (cb, payload) {
      axios({
         url: getUrl(store) + payload.url,
         method: 'GET',
         headers: {'Authorization': getToken(store)},
      })
      .then(resp => {
         _records = resp.data
         setTimeout(() => cb(_records),100)
      })
      .catch(function (error) {
         if (error.response) {
            window.console.log('catch '+error)
         } else if (error.request) {
            window.console.log('else if '+error)
         } else {
            window.console.log('else: '+error)
         }
      })
   },

   //TODO: concluir getProduto, /id
   getRecord (cb, payload) {
      axios({
         url: getUrl(store) + payload.url + '/id',
         method: 'GET',
         headers: {'Authorization': getToken(store)},
         })
         .then(resp => {
            _record = resp.data
            setTimeout(() => cb(_record),100)
         })
         .catch(function (error) {
            if (error.response) {
               window.console.log('catch '+error)
            } else if (error.request) {
               window.console.log('else if '+error)
            } else {
               window.console.log('else: '+error)
            }
         })
   },
   
   async createRecord (payload){
      const data = payload.data
      await axios({
         url: getUrl(store) + payload.url,
         method: 'POST',
         headers: {'Authorization': getToken(store)},
         data
         })
         .then(response => {
            _record = response.data
         })
      return _record
   },

   async updateRecord (payload){
      const data = payload.data
      await axios({
         url: getUrl(store) + payload.url +'/'+payload.data.id,
         method: 'PUT',
         headers: {'Authorization': getToken(store)},
         data })
         .then(response => {
            _record = response.data
         })
      return _record
   },
   
   async deleteRecord (payload){
      await axios({
         url: getUrl(store) + payload.url +'/'+payload.data.id,
         method: 'DELETE',
         headers: {'Authorization': getToken(store)},
         //data
      })
      .then(response => {
         window.console.log('Save, Delete: '+response.data)
      })
   },
}
