export interface IUser {
    id?: number;
    name: string,
	email: string,
	password: string,
	cellPhone: string,
    createdAt?: Date,
    updatedAt?: Date
}