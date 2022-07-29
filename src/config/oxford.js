var Dictionary = require("oxford-dictionary");

var config = {
  app_id: "2586c655",
  app_key: "b334edabe12282099bca5b838934d1b7",
  source_lang: "en-us",
};

  function wordMeaning(wordToSearch) {
  var dict = new Dictionary(config);

  var lookup = dict.find(wordToSearch);

  lookup.then(
    function (res) {
      // stringify JSON object to see full structure in console log
      //console.log(JSON.stringify(res, null, 4));
    },
    function (err) {
      console.log(err);
    }
  );

  //console.log(lookup)
  return lookup;
}






module.exports ={wordMeaning}



