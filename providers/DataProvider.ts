import { createContext } from 'react';
import type { Staff } from '../types/Staff'
import type { Roles } from '../types/Roles'

export const StaffContext = createContext<Staff[]>([]);
export const RolesContext = createContext<Roles[]>([]);