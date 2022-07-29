


const wordModel = require('../Models/wordModel')

const oxford = require('../config/oxford')




const addWord =  async function(req,res){

    // we need to add word with meaning in db 

    // will get from query 


    // validations and status Code not integrated yet 
    let word = req.query.word
    console.log(word)

    


    let wordMeaning  = oxford.wordMeaning(word) // we can easily destructure these large chunks 




    let wordToAddInDb ={
        word:word,
        wordMeaning:wordMeaning,
    }

    let addedWord = await wordModel.create(wordToAddInDb)


    res.status(200).send({status:true,data:addedWord})





}

const getWord =  async function(req,res){


    // it may be in Db or may  be not 
    let word = req.query.word

    let isWordInDb = await wordModel.find({word:word})
    

    // if not then use oxofordApi  and save in dB 
    if(!isWordInDb){

        let wordMeaning  = oxford.wordMeaning(word) 




    let wordToAddInDb ={
        word:word,
        wordMeaning:wordMeaning,
    }

    let addedWord = await wordModel.create(wordToAddInDb)


    res.status(200).send({status:true,data:addedWord})


    }

    else{
        res.send(isWordInDb.wordMeaning)  //from db 
    }

  




    
}

const searchWord =function(req,res){

    // fronend Part 

}


const deleteWord = function (req,res){


    let word = req.query.word

    let isWordInDb = await wordModel.find({word:word})
    if(! isWordInDb){
        res.status(404).send({status:false ,msg:"word not exist "})
    }

    else{

        isWordInDb.isDeleted ="true"
    }


}




module.exports ={addWord,searchWord,deleteWord,getWord}