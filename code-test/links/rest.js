var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');

/* set db Connection string*/
/*  change : <dbuser>:<dbpassword> */
var db = mongojs('mongodb://<dbuser>:<dbpassword>@ds149613.mlab.com:49613/user_list', ['movies']);

router.get('/movies', function(req, res, next){
    db.movies.find(function(err, dt){
        if(err){
            res.send(err);
        }
        res.json(dt);
    });
});


router.get('/movies/:id', function(req, res, next){
    db.movies.findOne({_id: mongojs.ObjectId(req.params.id)},function(err, d){
        if(err){
            res.send(err);
        }
        res.json(d);
    });
});


router.post('/movies', function(req, res, next){
    var task = req.body;
    if(!task.title ){
        res.status(400);
        res.json({
            "error": "Data not Proper"
        });
    } else {
        db.movies.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

router.delete('/movies/:id', function(req, res, next){
    db.movies.remove({_id: mongojs.ObjectId(req.params.id)},function(err, d){
        if(err){
            res.send(err);
        }
        res.json(d);
    });
});

router.put('/movies/:id', function(req, res, next){
    var task = req.body;
    var updTask = {};

    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    if(task.title){
        updTask.title = task.title;
    }

    if(task.status){
        updTask.status = task.status;
    }

    if(!updTask){
        res.status(400);
        res.json({
            "error":"Data not Proper"
        });
    } else {
        db.movies.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

module.exports = router;