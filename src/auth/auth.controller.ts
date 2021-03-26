import { Controller, Post, UseGuards, Request, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./local.auth.guard";

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/admin/login')
  async adminLogin(@Request() req: any) {
    return this.authService.adminlogin(req.user);
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/customer/login')
  async customerLogin(@Body() request: any) {
    return this.authService.customerUserlogin(request);
  }
}