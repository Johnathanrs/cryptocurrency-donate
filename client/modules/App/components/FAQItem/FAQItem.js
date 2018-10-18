import React from 'react';

export default function (props) {
    const { faq, targetID, targetHeading } = props;
    const _targetID = `#${targetID}`;
    return (
        <div className="card">
            <div className="card-header" id={targetHeading}>
                <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target={_targetID} aria-expanded="true" aria-controls={targetID}>
                        Q: {faq.question}
                    </button>
                    </h5>
            </div>

            <div id={targetID} className="collapse" aria-labelledby={targetHeading} data-parent="#faq">
                <div className="card-body">
                    <b>Answer:</b> {faq.answer}
                </div>
            </div>
        </div>
    )
};