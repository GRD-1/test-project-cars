import { Request } from 'express';
import { AuthDto } from '../dto/auth.dto';

export interface AuthRequestInterface extends Request {
  dto: AuthDto | null
}
