const router = require('express').Router();
const { Comment, Post, User } = require('../../models');

router.get('/', (req,res) => {
    Comment.findAll({
        attributes: [
            'id', 
            'comment_text', 
        ],
        include: [
            {
              model: User,
              attributes: ['username']
            },
            {
                model: Post,
                attributes: ['title']
            }
          ]
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
    Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.body.user_id,
      post_id: req.body.post_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  });

router.delete('/:id', (req, res) => {

});

module.exports = router;