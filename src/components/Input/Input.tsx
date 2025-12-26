import { useState, type ChangeEvent } from "react";
import eyeOpened from '../../icons/eyeOpened.svg';
import eyeClosed from '../../icons/eyeClosed.svg';
import styles from './Input.module.scss';
import { CloseButton } from "../ui/CloseButton/CloseButton";

export type InputProps = {
  type: "password" | "text" | "number";
  value: string;
  label?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}

export const Input = ({ type, value, label, onChange, onClear }: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const clearable = value ? true : false;

  const inputType = type === 'password' && showPassword ? 'text' : type;
  const eyeLink = showPassword ? eyeOpened : eyeClosed;

  return (
    <div className={styles.input}>
      {label && <label className={styles.input__label}>{label}</label>}
      <div className={styles.input__body}>
        <input
          className={styles.input__textArea}
          type={inputType}
          value={value}
          onChange={onChange}
        />
        
        <div className={styles.input__iconsContainer}>
          {type === 'password' && value && (
            <button onClick={() => setShowPassword(!showPassword)} type="button" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
              <img className={styles.input__iconEye} src={eyeLink} />
            </button>
          )}

          {clearable && value && (
            <CloseButton type='input' onClear={onClear} />
          )}
        </div>
      </div>
    </div>
  );
};