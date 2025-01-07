export interface User {
  email: string;
  username: string;
  isAdmin?: boolean;
}

export interface LoginCredentials {
  identifier: string;
  password: string;
}

export interface SignupCredentials {
  email: string;
  username: string;
  password: string;
}

export interface UserStats {
  totalUsers: number;
  activeUsers: number;
  recentSignups: User[];
}