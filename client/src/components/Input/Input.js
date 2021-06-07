import "./Input.css";
/**
 * 
 * @param {string} label 
 * @param {string} register 
 * @param {Boolean} required
 */
const Input = ({ label, register, required }) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
);

export default Input;