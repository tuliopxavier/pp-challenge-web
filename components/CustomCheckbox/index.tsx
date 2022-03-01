import { useEffect, useState } from 'react';
import CustomCheckboxStyled from './styles';

type CheckboxProps = { checked?: boolean }

const CustomCheckbox = ({checked}:CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        checked ? setIsChecked(true) : setIsChecked(false);
    },[checked]);

    return (
        <CustomCheckboxStyled>
            <label className="custom-checkbox">
                <input type="checkbox" checked={isChecked} disabled/>
                <span className="span-checkbox"></span>
            </label>
        </CustomCheckboxStyled>
    )
}

export default CustomCheckbox;