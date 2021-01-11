var express = require('express');
var router = express.Router();
var Student = require('../models/data-schema');
var Notice = require('../models/notice');
var Blog = require('../models/blog');
var Course = require('../models/courses');
var Recording = require('../models/recording');
var Query = require('../models/query');

// REFERENCES HERE

router.post('/create', (req, res, next) => {
    var newStudent = new Student({
        name: req.body.name,
        semester: req.body.semester,
        email:req.body.email,
        mobile:req.body.mobile,
        parentcontact:req.body.parentcontact,
        caste:req.body.caste,
        religion:req.body.religion,
        bloodgrp:req.body.bloodgrp,
        rank:req.body.rank,
        school:req.body.school,
        socialCommittee:req.body.socialCommittee,
        techCommittee:req.body.techCommittee,
        address:req.body.address,


        
    });

    newStudent.save((err, student) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: student });
    });


});

router.get('/read', (req, res, next) => {
    Student.find({}, (err, student) => {
        if (err)
            res.status(500).json({ errmsg: err });
        console.log(student);
        res.status(200).json({ msg: student });
    });


});

router.put('/update', (req, res, next) => {
    res.status(200).json({ msg: 'Put request is working' })
});

router.delete('/delete/:id', (req, res, next) => {
    res.status(200).json({ msg: 'Delete request is working' })
});

// REFERENCES END HERE

//ACTUAL CODE STARTS HERE

//get notice

router.get('/readNotice', (req, res, next) => {
    Notice.find({}, (err, notice) => {
        if (err)
            res.status(500).json({ errmsg: err });
        //console.log(student);
        res.status(200).json({ msg: notice });
    });


});

//post notice

router.post('/createNotice', (req, res, next) => {
    var newNotice = new Notice({
        noticeTitle: req.body.noticeTitle,
        noticeDate: req.body.noticeDate,
        noticeContent: req.body.noticeContent,
        authName: req.body.authName,
        authDesignation: req.body.authDesignation

    });
    
    newNotice.save((err, notice) => {
        if (err)
            res.status(500).json({ errmsg: err });
        
        res.status(200).json({ msg: notice });
    });


});

//BLOG REFERENCE STARTS HERE
//get blog

router.get('/readBlog', (req, res, next) => {
    Blog.find({}, (err, blog) => {
        if (err)
            res.status(500).json({ errmsg: err });
        //console.log(student);
        res.status(200).json({ msg: blog });
    });


});

//post blog

router.post('/createBlog', (req, res, next) => {
    var newBlog = new Blog({
       title: req.body.title,
       bdate: req.body.bdate,
       bday: req.body.bday,
       author: req.body.author,
       bcontent: req.body.bcontent

    });

    newBlog.save((err, blog) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: blog });
    });


});

//COURSE STARTS HERE
//get COURSE

router.get('/readCourse', (req, res, next) => {
    Course.find({}, (err, course) => {
        if (err)
            res.status(500).json({ errmsg: err });
        //console.log(student);
        res.status(200).json({ msg: course });
    });


});

//post COURSE

router.post('/createCourse', (req, res, next) => {
    var newCourse = new Course({
       name: req.body.name,
       semester: req.body.semester,
       credits: req.body.credits,
       alis: req.body.alis,
       branch: req.body.branch,
       program: req.body.program,

    });

    newCourse.save((err, course) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: course });
    });


});

//RECORDING STARTS HERE
//get RECORDING

router.get('/readRecording', (req, res, next) => {
    Recording.find({}, (err, recording) => {
        if (err)
            res.status(500).json({ errmsg: err });
        //console.log(student);
        res.status(200).json({ msg: recording });
    });


});

//post RECORDING

router.post('/createRecording', (req, res, next) => {
    var newRecording = new Recording({
       subject: req.body.subject,
       lecture: req.body.lecture,
       faculty:req.body.faculty,
       ldate : req.body.ldate,
       ytlink: req.body.ytlink,
         

    });

    newRecording.save((err, recording) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: recording });
    });


});


//QUERY STARTS HERE
//get QUERY

router.get('/readQuery', (req, res, next) => {
    Query.find({}, (err, query) => {
        if (err)
            res.status(500).json({ errmsg: err });
        //console.log(student);
        res.status(200).json({ msg: query });
    });


});

//post QUERY

router.post('/createQuery', (req, res, next) => {
    var newQuery = new Query({
       subject: req.body.subject,
       sender: req.body.sender,
       rec: req.body.rec,
       message: req.body.message
    });

    newQuery.save((err, query) => {
        if (err)
            res.status(500).json({ errmsg: err });
        res.status(200).json({ msg: query });
    });


});

module.exports = router;