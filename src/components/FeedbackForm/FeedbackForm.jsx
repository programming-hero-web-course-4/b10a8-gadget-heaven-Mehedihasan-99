import React, { useState } from 'react';

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState("");
    const [name, setName] = useState("");
    const [feedbackList, setFeedbackList] = useState([]);

    // Feedback submission function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (feedback && name) {
            const newFeedback = { id: Date.now(), name, feedback };
            setFeedbackList([...feedbackList, newFeedback]);
            setFeedback("");
            setName("");
        }
    };

    return (
        <div className='p-5'>
            <h2 className="p-4 text-2xl font-bold">Customer Feedback</h2>

            <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full md:w-2/3 mx-auto '>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='p-4 rounded-lg'
                />
                <textarea
                    placeholder="Your Feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className='p-4 rounded-xl  h-40'
                />
                <button type="submit" className='py-3 w-32 mx-auto rounded-xl bg-purple-500'>Submit</button>
            </form>

            <h3>Feedback List</h3>
            {feedbackList.length > 0 ? (
                <ul className='md:px-10 lg:px-20'>
                    {feedbackList.map((item) => (
                        <li key={item.id} className='mb-4 p-3 border text-center rounded-xl bg-white'>
                            <strong>{item.name}</strong>
                            <p>{item.feedback}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className='text-black text-lg font-semibold'>No feedback available yet.</p>
            )}
        </div>
    );
}

export default FeedbackForm;