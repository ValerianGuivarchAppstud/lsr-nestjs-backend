import { RollService } from '../../../../domain/services/RollService'
import { Controller, Get, Sse } from '@nestjs/common'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { concatMap, interval, Observable } from 'rxjs'
import { Server } from 'ws'

@Controller('api/v2/rolls')
@WebSocketGateway()
@ApiTags('RollsSse')
export class RollGateway {
  @WebSocketServer() server: Server

  constructor(private rollService: RollService) {}
  @Get('')
  @ApiOkResponse()
  @Sse('rolls')
  getRolls(): Observable<string> {
    // eslint-disable-next-line no-magic-numbers
    return interval(2000).pipe(
      concatMap(async () => {
        const roll = await this.rollService.getLast() // Remplacez par votre logique de génération de roll
        return `data: ${JSON.stringify(roll)}\n\n`
      })
    )
  }
}
