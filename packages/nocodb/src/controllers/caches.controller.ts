import { Controller, Delete, Get, UseGuards } from '@nestjs/common';
import { GlobalGuard } from '../guards/global/global.guard';
import { Acl } from '../middlewares/extract-project-id/extract-project-id.middleware';
import { CachesService } from '../services/caches.service';

@Controller()
@UseGuards(GlobalGuard)
export class CachesController {
  constructor(private readonly cachesService: CachesService) {}

  @Get('/api/v1/db/meta/cache')
  @Acl('cacheGet')
  async cacheGet(_, res) {
    const data = await this.cachesService.cacheGet();
    res.set({
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="cache-export.json"`,
    });
    return JSON.stringify(data);
  }

  @Delete('/api/v1/db/meta/cache')
  @Acl('cacheDelete')
  async cacheDelete() {
    return await this.cachesService.cacheDelete();
  }
}
