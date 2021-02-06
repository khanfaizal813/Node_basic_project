const db = require('../models')
module.exports = {
    insertion: (req, res, callback) => {
    console.log("function called ***********");
        // let makeEntry = async function(){
            // try{
                var recordObj = {};
                recordObj.log_type = "type 1";
                recordObj.log_data = "Log data";
                recordObj.create = Date.now();
                var result = db["wm_test_model"].create(recordObj).then(res => {
                    console.log(res);
                    callback("Sucessfully running ....")
                }).catch(e=>{
                        console.log("db catch",e)
                        callback("Error")
                    });                
                // return 0;
            // } catch{ e =>{
            //     console.log("db catch",e)
            //     callback("Error")
            //     return 0;
            // }}
            // .then(res =>{
            //     console.log("db then",res)
            //     callback("Sucessfully running ....")
            // }).catch(e=>{
            //     console.log("db catch",e)
            //     callback("Error")
            // })
        // }
        // makeEntry();
    },
}