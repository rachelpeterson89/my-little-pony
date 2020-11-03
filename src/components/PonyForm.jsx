const PonyForm = props => {

    const { inputs, handleForm, handleSubmit } = props;

    return(
        <form onSubmit={ handleSubmit } className="col-3 mx-auto">
            <h2 className="text-center">Add a Pony!</h2>
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control"
                    value={ inputs.name }
                    onChange={ handleForm }
                />
            </div>

            <div className="form-group">
                <label>Coat Color:</label>
                <input 
                    type="text" 
                    name="bodyColor"
                    className="form-control"
                    value={ inputs.bodyColor }
                    onChange={ handleForm }
                />
            </div>

            <div className="form-group">
                <label>Mane Color:</label>
                <input 
                    type="text" 
                    name="maneColor" 
                    className="form-control"
                    value={ inputs.maneColor }
                    onChange={ handleForm }
                />
            </div>

            <div className="form-group">
                <label>Age:</label>
                <input 
                    type="number" 
                    name="number" 
                    className="form-control"
                    value={ inputs.age }
                    onChange={ handleForm }
                />
            </div>

            <div className="form-group">
                <label>Has Wings:</label>
                <input 
                    type="text" 
                    name="hasWings" 
                    className="form-control"
                    value={ inputs.hasWings }
                    onChange={ handleForm }
                />
            </div>

            <div className="form-group">
                <label>Is Unicorn:</label>
                <input 
                    type="text" 
                    name="isUnicorn" 
                    className="form-control"
                    value={ inputs.isUnicorn }
                    onChange={ handleForm }
                />
            </div>

            <input type="submit" value="Add Pony" className="btn btn-warning"></input>
        </form>
    );

}

export default PonyForm;