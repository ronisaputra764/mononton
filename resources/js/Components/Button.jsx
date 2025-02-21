import "../../css/button.css";

export default function Button({
    className = '',
    children,
    variant = "primary",
    processing,
    ...props
}) {
    return (
        <button
            {...props}
            className={`rounded-2xl py-[13px] font-semibold text-center w-full ${processing && "opacity-30"} btn-${variant} ${className}`}
            disabled={processing}
        >
            {children}
        </button>
    );
}
