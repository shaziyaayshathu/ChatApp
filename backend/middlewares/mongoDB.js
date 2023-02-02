const mongoose = require ('mongoose')
mongoose.set('strictQuery', true);

const MONGO_URL = 'mongodb+srv://Ayisha123:ayisha123@cluster0.puomspg.mongodb.net/ChatAppDB?retryWrites=true&w=majority'

mongoose.connect(MONGO_URL)
.then(()=>{
    console.log('-------mongodb connected successfully-------')
})
.catch((error)=>{
    console.log(error.message)
})  