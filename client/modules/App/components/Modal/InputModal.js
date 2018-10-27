import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputModal(props) {
    const { title, message, handleChange, handleOk, transferredEmail } = props;
    return (
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">{title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="false">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                   {message}
                   <TextField
                        id="email"
                        label="Transferred Email"
                        type="email"
                        value={transferredEmail}
                        placeholder="id, location or title"
                        onChange={handleChange()}
                        margin="normal"
                    />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    <button type="button" onClick={() => handleOk()} className="btn btn-primary">Ok</button>
                </div>
                </div>
            </div>
        </div>
    );
}