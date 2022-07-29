# dictionaryApp


# approach
end points for where user can post and get  the request
use mongoose (mongo db ) to store json data.
end points for get request.
space for intigration.
followed rest api standards Endpoint: BASE_URL/Word  maintain endpoints well classified and efficient code easy to intigrate (with user authentication and authorization )

Key Points 

CRUD operations on words by  User  . 

for adding a new word user post a request using query params and if that word is not in our DB we will make an external call to oxford api call

for get word user get request first we will check in db and if not (oxford dict api )

for deletion ==> soft delete method isDelted value turns to be true 






Models 

wordModel
   word :{
        type:String,
        required:true
    },

    wordMeaning :{
        type:Object
        
    },
    
    synonyms:{
    }
    
    antonyms:{}


    isDeleted :{
        type:Boolean,
        default:false 

    }
