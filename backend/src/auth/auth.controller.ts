import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    // Simulación — aquí iría la consulta real a la base de datos
    if (email === 'admin@hwperu.com' && password === '123456') {
      return { token: 'jwt-fake-token', user: { id: 1, email } };
    }

    return { error: 'Credenciales inválidas' };
  }
}
