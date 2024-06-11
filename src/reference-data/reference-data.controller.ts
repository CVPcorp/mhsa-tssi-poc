import { ApiTags } from '@nestjs/swagger';
import { Controller, Param, Get } from '@nestjs/common';

import ReferenceDataService from './reference-data.service';

@Controller()
@ApiTags('Reference Data')
export class ReferenceDataController {
  constructor(private readonly service: ReferenceDataService) {}

  @Get()
  listReferenceData() {
    return this.service.listReferenceData();
  }

  @Get(':code')
  getReferenceData(@Param('code') code: string) {
    return this.service.getReferenceData(code);
  }
}

export default ReferenceDataController;
