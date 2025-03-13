import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma.service';
@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}
  async createTransaction() {
    // Create transaction
  }
}
