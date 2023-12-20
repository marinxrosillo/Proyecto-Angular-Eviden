import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private isAdmin: boolean = false; // Supongamos que tienes un indicador de si el usuario es administrador o no

  constructor() {}

  // Método para verificar si el usuario está autenticado
  isLogged(): boolean {
    return this.isLoggedIn;
  }

  // Método para verificar si el usuario es administrador
  isAdminUser(): boolean {
    return this.isAdmin;
  }

  // Método para simular inicio de sesión
  login(username: string, password: string): boolean {
    // Aquí podrías realizar la autenticación con tu backend
    // Verificar el username y password, obtener el token, etc.

    // Simulación básica de inicio de sesión
    if (username === 'admin' && password === 'admin') {
      this.isLoggedIn = true;
      this.isAdmin = true; // Supongamos que el usuario es administrador
      return true;
    }
    return false;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }
}