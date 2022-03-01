import { useRef, useState } from 'react';
import Link from 'next/link';
import useClickOutside from '../../hooks/useClickOutside';
import { HiDotsVertical, HiOutlineEye } from 'react-icons/hi';
import { BiTrash } from 'react-icons/bi';
import DropdownStaffActionStyled from './styles';

type IdProps = {
  agentId: number;
}

const DropdownStaffAction = ({agentId}:IdProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsOpen(false));

  return (
    <DropdownStaffActionStyled ref={ref}>
      <div className='dots' onClick={() => setIsOpen(!isOpen)}>
        <HiDotsVertical />
      </div>
      {isOpen &&
        <div className='staff-dropdown' onMouseLeave={() => setIsOpen(false)}>
          <Link href={`/agent/${agentId}`} passHref>
            <div className='dropdown-item'>
              <HiOutlineEye />
              <p>Ver colaborador</p>
            </div>
          </Link>
          <div className='dropdown-item'>
            <BiTrash />
            <p>Excluir</p>
          </div>
        </div>}
    </DropdownStaffActionStyled>
  );
};

export default DropdownStaffAction;
