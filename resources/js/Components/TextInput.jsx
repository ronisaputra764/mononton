import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import "../../css/input.css";
export default forwardRef(function TextInput(
    {
        type = 'text',
        className,
        isFocused = false,
        variant = 'primary',
        name,
        value,
        defaultValue,
        handleChange,
        placeholder,
        isError,
        ...props
    },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            autoComplete=''
            {...props}
            type={type}
            name={name}
            value={value}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`}
            ref={localRef}
            placeholder={placeholder}
            variant={variant}
            onChange={(e) => handleChange(e)}
        />
    );
});
