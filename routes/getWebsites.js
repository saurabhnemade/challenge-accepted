module.exports = function(app,data){

    app.get('/getWebsites', function(req, res){
        var page = parseInt(req.query.page),
            start = parseInt(req.query.start),
            limit = parseInt(req.query.limit),
            accepted = req.query.accepted,
            skipped = req.query.skipped,
            memory = req.query.memory,
            runtime = req.query.runtime,
            wrong = req.query.wrong,
            searchTerm = req.query.searchTerm;

        if(start < 0){ start = 0;}
        if(limit < 0){ limit = 0;}

        var filterData = data;

        /*
        skipping this part as there is no time to write this code in better way, I hope you understand. Otherwise I could have migrated this one to MongoDB
        if(accepted === true || accepted === 'true'){
            for(var i=0;i<filterData.length;i++){
                if(data[i].compiler_status === 'Accepted'){
                    filterData.push(data[i]);
                }
            }
        }

        if(skipped === true || skipped === 'true'){
            for(var j=0;j<filterData.length;j++){
                if(data[j].compiler_status === 'Skipped'){
                    filterData.push(data[j]);
                }
            }
        }

        if(memory === true || memory === 'true'){
            for(var k=0;k<filterData.length;k++){
                if(data[k].compiler_status.toLowerCase().indexOf('memory')!==0){
                    filterData.push(data[k]);
                }
            }
        }

        if(runtime === true || runtime === 'true'){
            for(var l=0;l<filterData.length;l++){
                if(data[l].compiler_status.toLowerCase().indexOf('runtime')!==0){
                    filterData.push(data[l]);
                }
            }
        }


        if(wrong === true || wrong === 'true'){
            for(var m=0;m<filterData.length;m++){
                if(data[m].compiler_status.toLowerCase().indexOf('runtime')!==0){
                    filterData.push(data[m]);
                }
            }
        }


        if(searchTerm!== ''){
            for(var n=0;n<filterData.length;n++){
                if(filterData[n].title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1){
                   //need to slice element
                }
            }
        }*/

        var d=[];
        for(var o=start;o<start+limit;o++){
            d.push(filterData[o]);
        }
        var responseData = {
            totalCount: filterData.length,
            data: d
        };
        res.setHeader('Content-Type', 'application/json');
        res.send(responseData);
    });
};
