import './button.css'
const Button = ({type, title, onClick, disable}) => {
    return (
        <div className="btn-group">
            <button className={`btn ${
                (type === "add" && "add") || 
                (type === "remove" && "remove") ||
                (type === "checkout" && "checkout") 
            } ${disable === true && 'disabled'}`}
                    onClick={onClick}
                    disabled={disable}
            >
                {title }
            </button>
        </div>
    );
};

export default Button;