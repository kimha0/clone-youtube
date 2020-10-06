import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  rootViewName = () => 'index.html';
}
