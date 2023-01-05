import clsx from "clsx";

import styles from './Button.module.css';

interface ButtonProps extends React.PropsWithChildren<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> {
  color?: "primary" | "default"
}

function Button({ children, color: variant, ...props }: ButtonProps) {
  return <button  {...props} className={clsx(styles.btn, styles[variant || 'default'], props.className)}>{children}</button>
}

export default Button;