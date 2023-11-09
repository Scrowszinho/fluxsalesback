import Keycloak, { KeycloakConfig } from 'keycloak-connect';
import session from 'express-session';
import dotenv from 'dotenv';
import { Request, Response } from 'express';
dotenv.config();
Keycloak.prototype.accessDenied = (req: Request, res: Response) => {
    res.json({
        message: 'Acesso não autorizado',
        code: 401
    })
}

export const keycloackSession = new session.MemoryStore();
const configs: KeycloakConfig = {
    realm: process.env.KEYCLOAK_REALM || '',
    "auth-server-url": process.env.KEYCLOAK_URL || '',
    resource: process.env.KEYCLOAK_CLIENT || '',
    "ssl-required": 'external',
    "confidential-port": process.env.KEYCLOAK_PORT || '',
};

const keycloak = new Keycloak({
    store: keycloackSession
},configs)

export default keycloak;