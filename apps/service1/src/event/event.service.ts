import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EventServiceBase } from "./base/event.service.base";

@Injectable()
export class EventService extends EventServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
