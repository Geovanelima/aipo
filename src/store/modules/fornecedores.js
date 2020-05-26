import services from 'services'

const state = {
   all: [],
   newRecord: {}
}

const mutations = {
   setAll (state, Records) {
      state.all = Records
   },

   createRecord (state, Record) {
      state.all.results.push(Record)
   },

   updateRecord (state, Record) {
      state.newRecord = Record
   },

   deleteRecord (state, Record) {
      let all = state.all.results
      all.forEach((element, index) => {
         if (element.id == Record.id)
            state.all.results.splice(index,1)
      })
   }
}

const actions = {
   //window.console.log('Pass-2, '+JSON.stringify(playload.data))
   getAll ({ commit }, url) {
      services.getRecords(records => {
         commit('setAll', records)
      },url)
   },

   createRecord ({ commit }, payload) {
      services.createRecord(payload)
      .then(res => {
         window.console.log('Pass-1, '+JSON.stringify(res))
         commit('createRecord', res)
      })
   },

   updateRecord ({ commit }, payload) {
      services.updateRecord(payload)
         .then(res => {
            window.console.log('Pass-2, '+JSON.stringify(res))
         })
      commit('updateRecord', payload.data)
   },

   deleteRecord ({ commit }, payload) {
      services.deleteRecord(payload)
      commit('deleteRecord', payload.data)
   }
}

const getters = {}

export default {
   namespaced: true,
   state,
   getters,
   actions,
   mutations
}