import { Controller, Post, Request, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('auth/admin/login')
  async adminLogin(@Request() req: any) {
    return this.authService.adminlogin(req.user);
  }

  @Post('auth/customer/login')
  async customerLogin(@Body() request: any) {
    return this.authService.customerUserlogin(request);
  }
}