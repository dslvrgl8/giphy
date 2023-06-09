import {useState} from 'react'

const Form = (props) => {

    const [formData, setFormData] = useState({searchTerm: '', name: ''})

    const handleChange = (event) => {
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.giphySearch(formData.searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='searchTerm'
                    value={formData.searchTerm}
                    onChange={handleChange}
                />
                <input type='submit' value='Submit' />
            </form>
        </div>
    );
}

export default Form;