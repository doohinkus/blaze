
import { useForm } from "react-hook-form";
import "./AddCustomer.css";
import Input from "../Input";

export default function AddCustomer() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return <div>
        For goes here
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} required />
        </form>
    </div>
}