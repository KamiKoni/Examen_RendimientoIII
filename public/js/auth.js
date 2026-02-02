import { api } from './api.js';

export const auth = {
    async login(email, password) {
        try {
            const user = await api.getUserByEmail(email);
            
            if (!user) {
                throw new Error('Usuario no encontrado');
            }

            if (user.password !== password) {
                throw new Error('Contraseña incorrecta');
            }

            const session = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                jobTitle: user.jobTitle || '',
                avatar: user.avatar || user.name.substring(0, 2).toUpperCase()
            };

            localStorage.setItem('session', JSON.stringify(session));
            return session;
        } catch (error) {
            throw error;
        }
    },

    async register(name, email, password) {
        try {
            const existingUser = await api.getUserByEmail(email);
            
            if (existingUser) {
                throw new Error('El email ya está registrado');
            }

            const newUser = await api.createUser({ name, email, password });
            return this.login(email, password);
        } catch (error) {
            throw error;
        }
    },

    logout() {
        localStorage.removeItem('session');
        window.location.href = '/';
    },

    getSession() {
        const session = localStorage.getItem('session');
        return session ? JSON.parse(session) : null;
    },

    isAuthenticated() {
        return this.getSession() !== null;
    },

    isAdmin() {
        const session = this.getSession();
        return session && session.role === 'admin';
    },

    isUser() {
        const session = this.getSession();
        return session && session.role === 'user';
    },

    requireAuth() {
        if (!this.isAuthenticated()) {
            window.location.href = '/';
            return false;
        }
        return true;
    },

    requireAdmin() {
        if (!this.isAuthenticated() || !this.isAdmin()) {
            window.location.href = '/';
            return false;
        }
        return true;
    },

    requireUser() {
        if (!this.isAuthenticated() || !this.isUser()) {
            window.location.href = '/';
            return false;
        }
        return true;
    }
};
