
import PropTypes from 'prop-types';
import s from './form.module.css'
import * as actions from "../../redux/form/form-actions";
import { useSelector ,useDispatch} from "react-redux";
import {  getName, getNumber} from "../../redux/form/form-selector";
const Form = ({ onSubmit}) => {
    
    const name = useSelector(getName)
    const number = useSelector(getNumber)

    const dispatch = useDispatch()
    
    const onSubmitForm = e => {
        e.preventDefault()
        onSubmit({ name, number })
        dispatch(actions.name(''))
        dispatch(actions.number(''))
    }

    return (
            <form className={s.form} onSubmit={onSubmitForm}>
                <h3 className={s.title}>Name</h3>
                <label>
                    <input
                        className={s.input}
                        onChange={(e) => dispatch(actions.name(e.target.value))}
                        value={name || ''}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <h3 className={s.title}>Number</h3>
                <label>
                    <input
                        className={s.input}
                        onChange={(e) => dispatch(actions.number(e.target.value))}
                        value={number || ''}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={s.button} type='submit'>Add contact</button>
            </form>
        )
}


Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}



export default Form