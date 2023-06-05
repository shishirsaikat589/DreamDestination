import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import { UserContext } from '../../../App';
import { css } from "@emotion/core";
import { PuffLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Feedback = () => {
    const [review, setReview] = useState([])
    const [loggedInUser] = useContext(UserContext);

    useEffect((data) => {
        fetch('https://fathomless-everglades-19778.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])
    return (
        <section style={{ padding: '100px', backgroundColor: "#c4eceb" }}>
            <div className='container'>
                <h1 className='my-5 text-center'><span style={{ color: '#7AB259' }}> Tourists Reviews</span></h1>
            </div>
            <div className="row">
                {
                    review.length === 0 &&
                    <PuffLoader
                        css={override}
                        size={50}
                        color={"#0f3057"}
                    />
                }
                {
                    review.map(feed => <FeedbackCard key={review._id} feed={feed} ></FeedbackCard>)
                }
            </div>

        </section>
    );
};

export default Feedback;