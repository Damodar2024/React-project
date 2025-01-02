import React from 'react'

class Form1 extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {},
            submitted: false,

        }
    }
    submit = (event) => {
        event.preventDefault();
        let errors = {};
        if (this.state.username === '') {
            errors.usernameError = 'usename cannot be empty'
        }
        if (this.state.email === '') {
            errors.emailError = 'email cannot be empty'
        }
        //test(),match()
        let regex = /\d/
        if (this.state.password.length <= 8 || !regex.test(this.state.password)) {
            errors.pswdError = 'must contain 8 characters and one digit'
        }
        this.setState({ errors });
        if (Object.keys(errors).length === 0) {
            this.setState({ submitted: true })
        }
    }
    render() {
        
        return (
            <>
            <form onSubmit={this.submit} className='container my-5 border border-secondary p-4 rounded shadow'>
                <div className='mb-3'>
                    <label className="form-label">
                        user name
                    </label>
                    <input
                        type="name" className="form-control" value={this.state.username}
                        onChange={(e) => this.setState({ username: e.target.value })}
                    />
                    {this.state.errors.usernameError && 
                    <span className='text-danger fs-6'>{this.state.errors.usernameError}</span>
                    }
                </div>
                <div className="mb-3">
                    <label  className="form-label">email</label>
                    <input
                        type="email" className="form-control" value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    {this.state.errors.emailError&& 
                    <span className='text-danger fs-6'>{this.state.errors.emailError}</span>
                    }
                </div>
                <div className="mb-3">
                    <label  className="form-label">password</label>
                    <input
                        type="password" className="form-control" value={this.state.password}
                        onChange={(e) => this.setState({ password: e.target.value })}
                    />
                    {this.state.errors.pswdError&& 
                    <span className='text-danger fs-6'>{this.state.errors.pswdError}</span>
                    }
                </div>

                <button type="submit" className="btn btn-primary">
            Submit
        </button>
            </form>
            {this.state.submitted && (
                    <div className="text-success py-2">Login success</div>
            )}
        </>
        );
       
    }
    
}

export default Form1;
