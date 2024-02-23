export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // Хэшированный пароль
}

export type RegisterData = Omit<User, "id"> & { confirmPassword: string };