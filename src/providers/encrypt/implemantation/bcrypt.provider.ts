import * as bcrypt from 'bcrypt';
import { IEncrypt } from '../iencrypt.interface';

export class BcryptProvider implements IEncrypt {
  /**
   * Generate Hash Password
   * @returns
   */
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
  }

  /**
   * Compare
   * @param password
   * @param hash
   * @returns
   */
  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
