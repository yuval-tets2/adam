import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MulyServiceBase } from "./base/muly.service.base";

@Injectable()
export class MulyService extends MulyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
