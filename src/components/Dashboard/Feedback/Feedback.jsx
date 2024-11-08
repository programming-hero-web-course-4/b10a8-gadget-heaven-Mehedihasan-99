import React from 'react';
import FeedbackForm from '../../FeedbackForm/FeedbackForm';

const Feedback = () => {
    return (
        <div className='max-w-7xl mx-auto space-y-4 lg:space-y-12 mb-5 md:mb-10 lg:mb-24'>
            <div className="max-w-7xl mx-auto bg-purple-600 py-8">
                <div className="w-11/12 md:w-2/3 mx-auto space-y-8 text-center">
                    <h2 className="text-white text-[32px] font-bold">Feedback</h2>
                    <p className="text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
            </div>
            <FeedbackForm />
        </div>
    );
};

export default Feedback;