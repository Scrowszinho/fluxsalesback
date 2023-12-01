export interface IPermissionCreate {
    name: string;       
    unique_name: string;
    description: string;
    user_id?: number;
}

export interface IPermissionToRoleCreate {
    role_id: number;
    user_id?: number;
    permissions: Array<number>;
}

export interface IPermissionsToRoleFormated {
    role_id: number;
    permission_id: number;
}
