import { TitleContent } from "./styles";

interface TitleProps {
  name: string;
  desc: string;
  pointer?: string;
  className?: string;
  nameSecond?: string;
}

export function Title({
  name,
  nameSecond,
  desc,
  pointer,
  className,
}: TitleProps) {
  return (
    <TitleContent className={className}>
      <h2>
        {name}
        <span>{pointer}</span>
        <br />
        {nameSecond}
      </h2>
      <p>{desc}</p>
    </TitleContent>
  );
}
