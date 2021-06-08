
import { useForm } from "react-hook-form";
import "./AddCustomer.css";
import Input from "../Input";

export default function AddCustomer() {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input label="First Name" register={register} required />
            <Input label="Last Name" register={register} required />
            <Input label="email" register={register} required />
            <Input label="phone" register={register} required />
            <input type="submit" />
        </form>
    </div>
}