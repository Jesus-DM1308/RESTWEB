import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
 PORT: get( 'PORT' ).requiered().asPortNumber(),
 PUBLIC_PATH: get('PUBLIC_PATH').requiered().asString()
} 