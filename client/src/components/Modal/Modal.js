import "./modal.css";
export default function Modal({ children, isActive }) {
    return <div className={`${isActive ? "modal" : ""}`}>
        <div className={`modal-content ${isActive ? "slide" : "isHidden"}`}>
            {children}
        </div>
    </div>
}