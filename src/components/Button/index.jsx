export const Button = ({ content, onClick, type, className, value}) => {
    return (
        <button className={`custom-button ${className}`} value={value} onClick={onClick} type={type && type}>{content}</button>
    )
}