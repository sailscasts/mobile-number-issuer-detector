// a number generator
// generate random numbers in accordance with the prefixes

var dataset = require('./prefixes.json')

var holder, store = []

function NumGen(dataset, amount) {
    dataset.forEach((value, index, array) => {
        for (let i = 0; i < amount; i++) {
            holder = value
            while (true) {
                if (holder.length > 10) {
                    break
                }
                holder = holder + Math.floor(Math.random() * 10).toString()
            }
            store.push(holder)
        }
    })
    console.log(store)
}

NumGen(dataset.ZOOM, 10)