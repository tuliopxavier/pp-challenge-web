import { createContext } from 'react';
import type { Roles } from '../types/Roles'
import { Staff } from '../types/Staff';

export const StaffContext = createContext<Staff[]>([]);
export const RolesContext = createContext<Roles[]>([]);