import React, { useState } from 'react';

function CommentForm() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      alert('Please fill in both fields');
      return;
    }

    console.log('New Comment:', { name, comment });

    // Reset form
    setName('');
    setComment('');
    alert('Thank you for your comment!');
  };

  return (
    <form onSubmit={handleSubmit} >
      <div className="commentForm">
        <div className='CommentInput'>
         <h2>Leave a Comment</h2>

        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />
        <br />
        <textarea
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <br />
        <br />

      <button type="submit">Submit</button>
      </div>  
      <div className='CommentOutput'>
        sdfdf</div> 
      </div>
    </form>
  );
}

export default CommentForm;
