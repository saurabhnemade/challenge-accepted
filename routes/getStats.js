module.exports = function(app,data){

    app.get('/getStats', function(req, res){
        var resData = {
            data: [
                {
                    id: 1,
                    languages: [
                        {
                            name: 'C',
                            count: 490
                        },
                        {
                            name: 'C++',
                            count: 490
                        },
                        {
                            name: 'Python',
                            count: 490
                        },
                        {
                            name: 'Java 7',
                            count: 1909
                        },
                        {
                            name: 'Java 8',
                            count: 9898
                        }
                    ],
                    accepted: [
                        {
                            name: '579D - "Or" Game - 22313'
                        },
                        {
                            name: '589B - Layer Cake - 15221'
                        }
                    ],
                    level: [
                        {
                            name: 'Easy',
                            count: 90
                        },
                        {
                            name: 'Medium',
                            count:9090
                        },
                        {
                            name: 'Hard',
                            count: 900
                        }
                    ],
                    totalSubmission: 234244
                }
            ]
        };

        res.setHeader('Content-Type', 'application/json');
        res.send(resData);
    });
};