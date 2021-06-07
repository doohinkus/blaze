// const displayModal = () => {
//     $('#myModal').style.display = "block";
//     $('.modal .modal-content').classList.add('slide');
//    }
//    const hideModal = () => {
//     $('#myModal').style.display = "none";
//     $('.billAmount').focus();
//    }
import "./modal.css";
export default function Modal({ children, isActive }) {
    return <div className={`modal modal-content ${isActive ? "slide" : "isHidden"}`}>
        {children}
    </div>
}