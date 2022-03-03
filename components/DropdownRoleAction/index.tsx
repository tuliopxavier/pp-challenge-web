import Link from 'next/link';
import { useRef, useState } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import { HiDotsVertical, HiOutlineEye, HiOutlineDuplicate } from 'react-icons/hi';
import { BiEdit } from 'react-icons/bi';
import { FiRepeat } from 'react-icons/fi';
import DropdownRoleActionStyled from './styles';

const DropdownRoleAction = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <DropdownRoleActionStyled ref={ref}>
      <div className='dots' onClick={() => setIsOpen(!isOpen)}>
        <HiDotsVertical />
      </div>
      {isOpen &&
        <div className='role-dropdown' onMouseLeave={() => setIsOpen(false)}>
          <Link href='/role/1' passHref >
            <div className='dropdown-item'>
              <HiOutlineEye />
              <p>Ver cargo</p>
            </div>
          </Link>
          <div className='dropdown-item'>
            <BiEdit />
            <p>Editar</p>
          </div>
          <div className='dropdown-item'>
            <HiOutlineDuplicate />
            <p>Duplicar</p>
          </div>
          <div className='dropdown-item'>
            <FiRepeat />
            <p>Excluir</p>
          </div>
        </div>}
    </DropdownRoleActionStyled>
  );
};

export default DropdownRoleAction;
