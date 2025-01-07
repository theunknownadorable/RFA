import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { User, LoginCredentials, SignupCredentials, UserStats } from '../types/auth';

interface AuthContextType {
  user: User | null;
  users: User[];
  stats: UserStats;
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [stats, setStats] = useState<UserStats>({
    totalUsers: 0,
    activeUsers: 0,
    recentSignups: [],
  });

  const login = async ({ identifier, password }: LoginCredentials) => {
    if (identifier === 'admin' && password === '@admin') {
      setUser({
        email: 'admin@rfa.com',
        username: 'admin',
        isAdmin: true,
      });
      return;
    }

    const isEmail = identifier.includes('@');
    const newUser = {
      email: isEmail ? identifier : 'user@example.com',
      username: isEmail ? 'user' : identifier,
      isAdmin: false,
    };

    setUser(newUser);
    updateStats(newUser);
  };

  const signup = async ({ email, username, password }: SignupCredentials) => {
    const newUser = { email, username, isAdmin: false };
    setUser(newUser);
    setUsers(prev => [...prev, newUser]);
    updateStats(newUser);
  };

  const updateStats = (newUser: User) => {
    setStats(prev => ({
      totalUsers: prev.totalUsers + 1,
      activeUsers: prev.activeUsers + 1,
      recentSignups: [newUser, ...prev.recentSignups].slice(0, 5),
    }));
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, stats, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}