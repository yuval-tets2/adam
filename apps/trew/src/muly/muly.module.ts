import { Module } from "@nestjs/common";
import { MulyModuleBase } from "./base/muly.module.base";
import { MulyService } from "./muly.service";
import { MulyController } from "./muly.controller";
import { MulyResolver } from "./muly.resolver";

@Module({
  imports: [MulyModuleBase],
  controllers: [MulyController],
  providers: [MulyService, MulyResolver],
  exports: [MulyService],
})
export class MulyModule {}
