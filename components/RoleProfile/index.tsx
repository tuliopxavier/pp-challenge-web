import type { Params } from 'next/dist/server/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import RoleContentContainerStyled from './styles';
import CustomCheckbox from '../CustomCheckbox';

type Role = {
    department: string;
    grouprules: {
        role: string,
        permissions: string[]
    }[];
    name: string;
};

type RoleItem = {
    role: string;
    permissions: string[];
}

const RoleProfile = () => {
    const [roleData, setRoleData] = useState<Role>({} as Role);
    const router = useRouter();
    const { roleId }: Params = router.query;

    const getRole = async (id: number) => {
        try {
            const response = await api.get(`role/${id}`);
            setRoleData(response.data.role);
        }
        catch (error) {
            alert('Colaborador não encontrado. Tente mais tarde.');
        };
    };

    useEffect(() => {
        roleId !== undefined && getRole(parseInt(roleId));
    }, [roleId]);

    return (
        <RoleContentContainerStyled>

            <section className="roles-data-section">
                <h3>Dados do cargo</h3>

                <div className="data-wrapper">
                    <div className='select-wrapper'>
                        <label htmlFor="department"> Departamento </label>
                        <select id="department" name="department" defaultValue={roleData.department}>
                            <option >{roleData.department}</option>
                        </select>
                    </div>

                    <div className='select-wrapper'>
                        <label htmlFor="role"> Cargo </label>
                        <select id="role" name="role" defaultValue={roleData.name}>
                            <option>{roleData.name}</option>
                        </select>
                    </div>
                </div>
            </section>

            <h3>Listagem de Permissões</h3>

            <div className='table-header'>
                <h6>Cargo</h6>
                <h6>Ler</h6>
                <h6>Editar</h6>
                <h6>Excluir</h6>
            </div>

            <ul>
                {roleData.grouprules?.map((role: RoleItem) => {
                    return (

                        <div key={role.role} className="role-permission-line">
                            <p>{role.role}</p>
                            {role.permissions?.includes('read') ? <CustomCheckbox checked /> : <CustomCheckbox />}
                            {role.permissions?.includes('write') ? <CustomCheckbox checked /> : <CustomCheckbox />}
                            {role.permissions?.includes('delete') ? <CustomCheckbox checked /> : <CustomCheckbox />}
                        </div>
                    )
                })}
            </ul>

        </RoleContentContainerStyled>
    );
};

export default RoleProfile;
