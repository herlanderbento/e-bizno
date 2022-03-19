import {
  useState,
  useRef,
  useCallback,
  ComponentType,
  TextareaHTMLAttributes,
} from "react";
import { IconBaseProps } from "react-icons/lib";

import { Container } from "./styles";

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  icon?: ComponentType<IconBaseProps>;
  className?: string;
}

export function TextArea({ icon: Icon, className, children, ...rest }: IProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!textAreaRef.current?.value);
  }, []);

  return (
    <Container className={className} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon size={16} />}
      <textarea
        ref={textAreaRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        autoComplete="off"
      ></textarea>
    </Container>
  );
}
