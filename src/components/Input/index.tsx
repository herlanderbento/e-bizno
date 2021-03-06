import {
  useState,
  useRef,
  useCallback,
  ComponentType,
  InputHTMLAttributes,
} from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";

import { Container } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ComponentType<IconBaseProps>;
  isPassword?: Boolean;
  className?: string;
}

export function Input({
  icon: Icon,
  className,
  isPassword = false,
  ...rest
}: IProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <Container className={className} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={16} />}
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        type={showPassword ? "text" : rest.type}
        autoComplete="off"
      />
      {isPassword &&
        (showPassword ? (
          <FaEye
            size={16}
            color="#677788"
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ) : (
          <FaEyeSlash
            size={16}
            color="#677788"
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ))}
    </Container>
  );
}
