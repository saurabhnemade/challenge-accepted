module.exports = function(app,data){

    app.get('/getUsers', function(req, res){
        res.send({ id: 'saurabh' });
    });
};
