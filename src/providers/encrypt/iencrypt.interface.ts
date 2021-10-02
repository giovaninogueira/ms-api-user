export interface IEncrypt {
    hashPassword(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}