import Keycloak, { KeycloakConfig } from 'keycloak-connect';
import session from 'express-session';
import dotenv from 'dotenv';
dotenv.config();

const keycloackSession = new session.MemoryStore();
const configs: KeycloakConfig = {
    realm: process.env.KEYCLOAK_REALM || '',
    "auth-server-url": process.env.KEYCLOAK_URL || '',
    "ssl-required": 'external',
    resource: process.env.KEYCLOAK_CLIENT || '',
    'bearer-only': true,
    "confidential-port": process.env.KEYCLOAK_PORT || '',
};

const keycloak = new Keycloak({
    store: keycloackSession
},configs)

export default keycloak;